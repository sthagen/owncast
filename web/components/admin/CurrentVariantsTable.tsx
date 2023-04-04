// Updating a variant will post ALL the variants in an array as an update to the API.

import React, { FC, useContext, useState } from 'react';
import { Typography, Table, Modal, Button, Alert } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import dynamic from 'next/dynamic';
import { ServerStatusContext } from '../../utils/server-status-context';
import { AlertMessageContext } from '../../utils/alert-message-context';
import { UpdateArgs, VideoVariant } from '../../types/config-section';

import { VideoVariantForm } from './VideoVariantForm';
import {
  API_VIDEO_VARIANTS,
  DEFAULT_VARIANT_STATE,
  RESET_TIMEOUT,
  postConfigUpdateToAPI,
  ENCODER_PRESET_TOOLTIPS,
  ENCODER_RECOMMENDATION_THRESHOLD,
} from '../../utils/config-constants';
import {
  createInputStatus,
  StatusState,
  STATUS_ERROR,
  STATUS_PROCESSING,
  STATUS_SUCCESS,
} from '../../utils/input-statuses';
import { FormStatusIndicator } from './FormStatusIndicator';

const { Title } = Typography;

// Lazy loaded components

const DeleteOutlined = dynamic(() => import('@ant-design/icons/DeleteOutlined'), {
  ssr: false,
});

// eslint-disable-next-line import/prefer-default-export
export const CurrentVariantsTable: FC = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalProcessing, setModalProcessing] = useState(false);
  const [editId, setEditId] = useState(0);
  const { setMessage } = useContext(AlertMessageContext);

  // current data inside modal
  const [modalDataState, setModalDataState] = useState(DEFAULT_VARIANT_STATE);

  const [submitStatus, setSubmitStatus] = useState<StatusState>(null);

  const serverStatusData = useContext(ServerStatusContext);
  const { serverConfig, setFieldInConfigState } = serverStatusData || {};
  const { videoSettings } = serverConfig || {};
  const { videoQualityVariants } = videoSettings || {};

  let resetTimer = null;

  if (!videoSettings) {
    return null;
  }

  const resetStates = () => {
    setSubmitStatus(null);
    resetTimer = null;
    clearTimeout(resetTimer);
  };

  const handleModalCancel = () => {
    setDisplayModal(false);
    setEditId(-1);
    setModalDataState(DEFAULT_VARIANT_STATE);
  };

  // posts all the variants at once as an array obj
  const postUpdateToAPI = async (postValue: any) => {
    setSubmitStatus(createInputStatus(STATUS_PROCESSING));

    await postConfigUpdateToAPI({
      apiPath: API_VIDEO_VARIANTS,
      data: { value: postValue },
      onSuccess: () => {
        setFieldInConfigState({
          fieldName: 'videoQualityVariants',
          value: postValue,
          path: 'videoSettings',
        });

        // close modal
        setModalProcessing(false);
        handleModalCancel();

        setSubmitStatus(createInputStatus(STATUS_SUCCESS, 'Variants updated'));
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);

        if (serverStatusData.online) {
          setMessage(
            'Updating your video configuration will take effect the next time you begin a new stream.',
          );
        }
      },
      onError: (message: string) => {
        setSubmitStatus(createInputStatus(STATUS_ERROR, message));
        setModalProcessing(false);
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);
      },
    });
  };

  // on Ok, send all of dataState to api
  // show loading
  // close modal when api is done
  const handleModalOk = () => {
    setModalProcessing(true);

    const postData = [...videoQualityVariants];
    if (editId === -1) {
      postData.push(modalDataState);
    } else {
      postData.splice(editId, 1, modalDataState);
    }
    postUpdateToAPI(postData);
  };

  const handleDeleteVariant = (index: number) => {
    const postData = [...videoQualityVariants];
    postData.splice(index, 1);
    postUpdateToAPI(postData);
  };

  const handleUpdateField = ({ fieldName, value }: UpdateArgs) => {
    setModalDataState({
      ...modalDataState,
      [fieldName]: value,
    });
  };

  const videoQualityColumns: ColumnsType<VideoVariant> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (name: string) => (!name ? 'No name' : name),
    },
    {
      title: 'Video bitrate',
      dataIndex: 'videoBitrate',
      key: 'videoBitrate',
      render: (bitrate: number, variant: VideoVariant) =>
        !bitrate || variant.videoPassthrough ? 'Same as source' : `${bitrate} kbps`,
    },

    {
      title: 'CPU Usage',
      dataIndex: 'cpuUsageLevel',
      key: 'cpuUsageLevel',
      render: (level: string, variant: VideoVariant) =>
        variant.videoPassthrough
          ? 'n/a'
          : ENCODER_PRESET_TOOLTIPS[level]?.split(' ')[0] || 'Warning: please edit & reset',
    },
    {
      title: '',
      dataIndex: '',
      key: 'edit',
      render: ({ key }: VideoVariant) => {
        const index = key - 1;
        return (
          <span className="actions">
            <Button
              size="small"
              onClick={() => {
                setEditId(index);
                setModalDataState(videoQualityVariants[index]);
                setDisplayModal(true);
              }}
            >
              Edit
            </Button>
            <Button
              className="delete-button"
              icon={<DeleteOutlined />}
              size="small"
              disabled={videoQualityVariants.length === 1}
              onClick={() => {
                handleDeleteVariant(index);
              }}
            />
          </span>
        );
      },
    },
  ];

  const videoQualityVariantData = videoQualityVariants.map((variant, index) => ({
    key: index + 1,
    ...variant,
  }));

  const showSecondVariantRecommendation = (): boolean => {
    if (videoQualityVariants.length !== 1) {
      return false;
    }

    const [variant] = videoQualityVariants;

    return (
      ENCODER_RECOMMENDATION_THRESHOLD.VIDEO_HEIGHT <= variant.scaledHeight ||
      ENCODER_RECOMMENDATION_THRESHOLD.VIDEO_BITRATE <= variant.videoBitrate
    );
  };

  return (
    <>
      <Title level={3} className="section-title">
        Stream output
      </Title>

      {showSecondVariantRecommendation() && (
        <Alert message={ENCODER_RECOMMENDATION_THRESHOLD.HELP_TEXT} type="info" closable />
      )}

      <FormStatusIndicator status={submitStatus} />

      <Table
        className="variants-table"
        pagination={false}
        size="small"
        columns={videoQualityColumns}
        dataSource={videoQualityVariantData}
      />

      <Modal
        title="Edit Video Variant Details"
        open={displayModal}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        confirmLoading={modalProcessing}
        width={900}
      >
        <VideoVariantForm dataState={{ ...modalDataState }} onUpdateField={handleUpdateField} />

        <FormStatusIndicator status={submitStatus} />
      </Modal>
      <br />
      <Button
        type="primary"
        onClick={() => {
          setEditId(-1);
          setModalDataState(DEFAULT_VARIANT_STATE);
          setDisplayModal(true);
        }}
      >
        Add a new variant
      </Button>
    </>
  );
};
