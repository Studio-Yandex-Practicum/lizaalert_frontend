import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { withRouter } from 'storybook-addon-react-router-v6';
import CoursePreview from './course-preview';

export default {
  ...exportConfig,
  title: 'Organisms/CoursePreview',
  component: CoursePreview,
  decorators: [withRouter],
  argTypes: {
    course: {
      defaultValue: {
        id: 1,
        title: 'Кинологическое напрвление',
        level: 'Бывалый',
        short_description:
          'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак. Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак.',
        lessons_count: 42,
        course_duration: 42,
        course_status: 'booked',
        cover_path: '123',
      },
    },
  },
} as ComponentMeta<typeof CoursePreview>;

const Template: ComponentStory<typeof CoursePreview> = (args) => (
  <CoursePreview {...args} />
);

export const Base = Template.bind({});
