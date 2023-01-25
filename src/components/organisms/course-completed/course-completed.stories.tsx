import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { withRouter } from 'storybook-addon-react-router-v6';
import CourseCompleted from './course-completed';

export default {
  ...exportConfig,
  title: 'Organisms/CourseCompleted',
  component: CourseCompleted,
  decorators: [withRouter],
  argTypes: {
    isCompleted: { defaultValue: true },
    courseName: { defaultValue: 'Кинологическое направление' },
    courseSuccessDescription: {
      defaultValue:
        'Теперь вы можете участвовать в поисково-спасательных мероприятиях со своей собакой.',
    },
    linkHref: { defaultValue: '/' },
  },
} as ComponentMeta<typeof CourseCompleted>;

const Template: ComponentStory<typeof CourseCompleted> = (args) => (
  <CourseCompleted {...args} />
);

export const Base = Template.bind({});
