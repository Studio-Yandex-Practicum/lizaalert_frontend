import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import ContentsItem from './contents-item';
import { mockContents } from './constants';

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

const Template: ComponentStory<typeof ContentsItem> = (args) => (
  <ContentsItem {...args} />
);

export const Base = Template.bind({});
