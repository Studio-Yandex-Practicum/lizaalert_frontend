import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { mockContents } from 'components/organisms/contents-item/contents-item.stories';
import CourseContents from './course-contents';

export default {
  ...exportConfig,
  title: 'Organisms/CourseContents',
  component: CourseContents,
  argTypes: {
    content: { defaultValue: [mockContents] },
    type: { defaultValue: 'main' },
  },
} as ComponentMeta<typeof CourseContents>;

const Template: ComponentStory<typeof CourseContents> = ({
  content,
  ...args
}) => <CourseContents content={content} {...args} />;

export const Base = Template.bind({});
