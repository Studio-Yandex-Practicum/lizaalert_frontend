import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { withRouter } from 'storybook-addon-react-router-v6';
import RestorePasswordForm from './restore-password-form';

export default {
  ...exportConfig,
  title: 'Organisms/RestorePasswordForm',
  component: RestorePasswordForm,
  decorators: [withRouter],
} as ComponentMeta<typeof RestorePasswordForm>;

const Template: ComponentStory<typeof RestorePasswordForm> = () => (
  <RestorePasswordForm />
);

export const Base = Template.bind({});
