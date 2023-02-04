import React from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

export const DocsContainer = ({ children, context }) => {
  return (
    <BaseContainer
      context={{
        ...context,
        storyById: id => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: themes.light,
              },
            },
          };
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
