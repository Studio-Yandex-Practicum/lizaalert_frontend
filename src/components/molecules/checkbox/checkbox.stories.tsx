import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'config/storybook';
import Checkbox from './checkbox';

export default {
  ...exportConfig,
  title: 'Molecules/Checkbox',
  component: Checkbox,
  argTypes: {
    isRadio: { defaultValue: false },
    labelText: { defaultValue: 'Текст чекбокса' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ labelText, ...args }) => (
  <Checkbox labelText={labelText} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'storybook',
};

export const Radio = Template.bind({});
Radio.args = {
  isRadio: true,
  name: 'storybook-radio',
};
