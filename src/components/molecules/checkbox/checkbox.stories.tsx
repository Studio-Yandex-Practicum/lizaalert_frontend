import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
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

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Base = Template.bind({});
Base.args = {
  name: 'storybook-checkbox',
};

export const Radio = Template.bind({});
Radio.args = {
  isRadio: true,
  name: 'storybook-radio',
};
