import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
import Tag from './tag';

export default {
  ...exportConfig,
  title: 'Molecules/Tag',
  component: Tag,
  argTypes: {
    text: { type: 'string', defaultValue: 'Текст тега' },
    value: { type: 'string', defaultValue: '' },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Base = Template.bind({});
Base.argTypes = utils.disableControls('value');

export const WithClose = Template.bind({});
WithClose.args = {
  onClick: console.log,
  value: '1',
};
