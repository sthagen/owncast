import { Button, Collapse } from 'antd';
import classNames from 'classnames';
import React, { useContext, useState, useEffect } from 'react';
import { UpdateArgs } from '../../../../types/config-section';
import { ServerStatusContext } from '../../../../utils/server-status-context';
import { AlertMessageContext } from '../../../../utils/alert-message-context';

import {
  postConfigUpdateToAPI,
  API_S3_INFO,
  RESET_TIMEOUT,
  S3_TEXT_FIELDS_INFO,
} from '../../../../utils/config-constants';
import {
  createInputStatus,
  StatusState,
  STATUS_ERROR,
  STATUS_PROCESSING,
  STATUS_SUCCESS,
} from '../../../../utils/input-statuses';
import { TextField } from '../../TextField';
import { FormStatusIndicator } from '../../FormStatusIndicator';
import { isValidUrl } from '../../../../utils/validators';
import { ToggleSwitch } from '../../ToggleSwitch';

const { Panel } = Collapse;

// we could probably add more detailed checks here
// `currentValues` is what's currently in the global store and in the db
function checkSaveable(formValues: any, currentValues: any) {
  const { endpoint, accessKey, secret, bucket, region, enabled, acl, forcePathStyle, pathPrefix } =
    formValues;
  // if fields are filled out and different from what's in store, then return true
  if (enabled) {
    if (!!endpoint && isValidUrl(endpoint) && !!accessKey && !!secret && !!bucket && !!region) {
      if (
        enabled !== currentValues.enabled ||
        endpoint !== currentValues.endpoint ||
        accessKey !== currentValues.accessKey ||
        secret !== currentValues.secret ||
        bucket !== currentValues.bucket ||
        region !== currentValues.region ||
        pathPrefix !== currentValues.pathPrefix ||
        (!currentValues.acl && acl !== '') ||
        (!!currentValues.acl && acl !== currentValues.acl) ||
        forcePathStyle !== currentValues.forcePathStyle
      ) {
        return true;
      }
    }
  } else if (enabled !== currentValues.enabled) {
    return true;
  }
  return false;
}

// eslint-disable-next-line react/function-component-definition
export default function EditStorage() {
  const [formDataValues, setFormDataValues] = useState(null);
  const [submitStatus, setSubmitStatus] = useState<StatusState>(null);

  const [shouldDisplayForm, setShouldDisplayForm] = useState(false);
  const serverStatusData = useContext(ServerStatusContext);
  const { serverConfig, setFieldInConfigState } = serverStatusData || {};

  const { setMessage: setAlertMessage } = useContext(AlertMessageContext);

  const { s3 } = serverConfig;
  const {
    accessKey = '',
    acl = '',
    bucket = '',
    enabled = false,
    endpoint = '',
    region = '',
    secret = '',
    pathPrefix = '',
    forcePathStyle = false,
  } = s3;

  useEffect(() => {
    setFormDataValues({
      accessKey,
      acl,
      bucket,
      enabled,
      endpoint,
      region,
      secret,
      pathPrefix,
      forcePathStyle,
    });
    setShouldDisplayForm(enabled);
  }, [s3]);

  if (!formDataValues) {
    return null;
  }

  let resetTimer = null;
  const resetStates = () => {
    setSubmitStatus(null);
    resetTimer = null;
    clearTimeout(resetTimer);
  };

  // update individual values in state
  const handleFieldChange = ({ fieldName, value }: UpdateArgs) => {
    setFormDataValues({
      ...formDataValues,
      [fieldName]: value,
    });
  };

  // posts the whole state
  const handleSave = async () => {
    setSubmitStatus(createInputStatus(STATUS_PROCESSING));
    const postValue = formDataValues;
    if (postValue?.servingEndpoint) {
      postValue.servingEndpoint = postValue?.servingEndpoint?.replace(/\/+$/g, '');
    }

    await postConfigUpdateToAPI({
      apiPath: API_S3_INFO,
      data: { value: postValue },
      onSuccess: () => {
        setFieldInConfigState({ fieldName: 's3', value: postValue, path: '' });
        setSubmitStatus(createInputStatus(STATUS_SUCCESS, 'Updated.'));
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);
        setAlertMessage(
          'Changing your storage configuration will take place the next time you start a new stream.',
        );
      },
      onError: (message: string) => {
        setSubmitStatus(createInputStatus(STATUS_ERROR, message));
        resetTimer = setTimeout(resetStates, RESET_TIMEOUT);
      },
    });
  };

  // toggle switch.
  const handleSwitchChange = (storageEnabled: boolean) => {
    setShouldDisplayForm(storageEnabled);
    handleFieldChange({ fieldName: 'enabled', value: storageEnabled });
  };

  const handleForcePathStyleSwitchChange = (forcePathStyleEnabled: boolean) => {
    handleFieldChange({ fieldName: 'forcePathStyle', value: forcePathStyleEnabled });
  };

  const containerClass = classNames({
    'edit-storage-container': true,
    'form-module': true,
    enabled: shouldDisplayForm,
  });

  const isSaveable = checkSaveable(formDataValues, s3);

  return (
    <div className={containerClass}>
      <div className="enable-switch">
        <ToggleSwitch
          apiPath=""
          fieldName="enabled"
          label="Use S3 Storage Provider"
          checked={formDataValues.enabled}
          onChange={handleSwitchChange}
        />
        {/* <Switch
          checked={formDataValues.enabled}
          defaultChecked={formDataValues.enabled}
          onChange={handleSwitchChange}
          checkedChildren="ON"
          unCheckedChildren="OFF"
        />{' '}
        Enabled */}
      </div>

      <div className="form-fields">
        <div className="field-container">
          <TextField
            {...S3_TEXT_FIELDS_INFO.endpoint}
            value={formDataValues.endpoint}
            onChange={handleFieldChange}
          />
        </div>
        <div className="field-container">
          <TextField
            {...S3_TEXT_FIELDS_INFO.accessKey}
            value={formDataValues.accessKey}
            onChange={handleFieldChange}
          />
        </div>
        <div className="field-container">
          <TextField
            {...S3_TEXT_FIELDS_INFO.secret}
            value={formDataValues.secret}
            onChange={handleFieldChange}
          />
        </div>
        <div className="field-container">
          <TextField
            {...S3_TEXT_FIELDS_INFO.bucket}
            value={formDataValues.bucket}
            onChange={handleFieldChange}
          />
        </div>
        <div className="field-container">
          <TextField
            {...S3_TEXT_FIELDS_INFO.region}
            value={formDataValues.region}
            onChange={handleFieldChange}
          />
        </div>

        <Collapse className="advanced-section">
          <Panel header="Optional Settings" key="1">
            <div className="field-container">
              <TextField
                {...S3_TEXT_FIELDS_INFO.acl}
                value={formDataValues.acl}
                onChange={handleFieldChange}
              />
            </div>

            <div className="field-container">
              <TextField
                {...S3_TEXT_FIELDS_INFO.pathPrefix}
                value={formDataValues.pathPrefix}
                onChange={handleFieldChange}
              />
            </div>

            <div className="enable-switch">
              <ToggleSwitch
                {...S3_TEXT_FIELDS_INFO.forcePathStyle}
                fieldName="forcePathStyle"
                checked={formDataValues.forcePathStyle}
                onChange={handleForcePathStyleSwitchChange}
              />
            </div>
          </Panel>
        </Collapse>
      </div>

      <div className="button-container">
        <Button type="primary" onClick={handleSave} disabled={!isSaveable}>
          Save
        </Button>
        <FormStatusIndicator status={submitStatus} />
      </div>
    </div>
  );
}
