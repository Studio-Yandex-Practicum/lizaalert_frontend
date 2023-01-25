import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import CourseOverview from './course-overview';

export default {
  ...exportConfig,
  title: 'Organisms/CourseOverview',
  component: CourseOverview,
  argTypes: {
    id: { defaultValue: 1 },
    level: { defaultValue: 'Бывалый' },
    startDate: { defaultValue: '2022-09-15' },
    coverPath: { defaultValue: '123' },
    lessonsCount: { defaultValue: 42 },
    courseDuration: { type: 'number', defaultValue: 42 },
  },
} as ComponentMeta<typeof CourseOverview>;

const Template: ComponentStory<typeof CourseOverview> = (args) => (
  <CourseOverview {...args} />
);

export const Base = Template.bind({});
