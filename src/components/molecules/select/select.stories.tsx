import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import Select from './select';

export default {
  ...exportConfig,
  title: 'Molecules/Select',
  component: Select,
  argTypes: {
    name: { type: 'string', defaultValue: 'storybook-select' },
    label: { type: 'string', defaultValue: 'Текст лейбла' },
    placeholder: { type: 'string', defaultValue: '' },
    options: { control: false },
    initialOption: { control: false },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Standard = Template.bind({});
