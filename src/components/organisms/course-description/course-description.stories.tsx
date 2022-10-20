import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import CourseDescription, { defaultProps } from './course-description';

export default {
  ...exportConfig,
  title: 'Organisms/CourseDescription',
  component: CourseDescription,
  argTypes: {
    description: { defaultValue: defaultProps.description },
    tasks: { defaultValue: defaultProps.tasks },
  },
} as ComponentMeta<typeof CourseDescription>;

const Template: ComponentStory<typeof CourseDescription> = (args) => (
  <CourseDescription {...args} />
);

export const Base = Template.bind({});
