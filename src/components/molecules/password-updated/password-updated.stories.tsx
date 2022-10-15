import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import PasswordUpdated from './password-updated';

export default {
  ...exportConfig,
  title: 'Molecules/PasswordUpdated',
  component: PasswordUpdated,
} as ComponentMeta<typeof PasswordUpdated>;

const Template: ComponentStory<typeof PasswordUpdated> = (args) => (
  <PasswordUpdated {...args} />
);

export const Base = Template.bind({});
