import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import VideoLesson from './video-lesson';

export default {
  ...exportConfig,
  title: 'Organisms/VideoLesson',
  component: VideoLesson,
  argTypes: {
    source: { defaultValue: 'https://www.youtube.com/embed/EcTurZapJs4' },
  },
} as ComponentMeta<typeof VideoLesson>;

const Template: ComponentStory<typeof VideoLesson> = (args) => (
  <VideoLesson {...args} />
);

export const Base = Template.bind({});
