import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import PreviewWebinar from './preview-webinar';

export default {
  ...exportConfig,
  title: 'Organisms/PreviewWebinar',
  component: PreviewWebinar,
  argTypes: {
    date: { defaultValue: '2022-03-30T19:00:00' },
    link: { defaultValue: '/' },
  },
} as ComponentMeta<typeof PreviewWebinar>;

const Template: ComponentStory<typeof PreviewWebinar> = (args) => (
  <PreviewWebinar {...args} />
);

export const Base = Template.bind({});
