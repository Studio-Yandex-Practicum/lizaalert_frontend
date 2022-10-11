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

const Template: ComponentStory<typeof Checkbox> = ({ labelText, ...args }) => (
  <Checkbox labelText={labelText} {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  name: 'storybook-checkbox',
};

export const Radio = Template.bind({});
Radio.args = {
  isRadio: true,
  name: 'storybook-radio',
};
