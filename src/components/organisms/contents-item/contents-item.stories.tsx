import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import ContentsItem from './contents-item';

export const mockContents = {
  id: 1,
  title: 'Заголовок раздела',
  lessons: [
    {
      id: 1,
      order_number: 1,
      duration: 42,
      title: 'Заголовок урока',
      lesson_type: 'Lesson',
      lesson_status: 'Published',
    },
    {
      id: 2,
      order_number: 2,
      duration: 42,
      title: 'Заголовок видеоурока',
      lesson_type: 'Videolesson',
      lesson_status: 'Published',
    },
    {
      id: 3,
      order_number: 3,
      duration: 42,
      title: 'Заголовок вебинара',
      lesson_type: 'Webinar',
      lesson_status: 'Published',
    },
    {
      id: 4,
      order_number: 4,
      duration: 42,
      title: 'Заголовок теста',
      lesson_type: 'Quiz',
      lesson_status: 'Published',
    },
  ],
};

export default {
  ...exportConfig,
  title: 'Organisms/ContentsItem',
  component: ContentsItem,
  argTypes: {
    index: { defaultValue: 0 },
    content: { defaultValue: mockContents },
    type: { defaultValue: 'main' },
  },
} as ComponentMeta<typeof ContentsItem>;

const Template: ComponentStory<typeof ContentsItem> = ({
  index,
  content,
  ...args
}) => <ContentsItem index={index} content={content} {...args} />;

export const Base = Template.bind({});
