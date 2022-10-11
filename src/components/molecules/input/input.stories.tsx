import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { iconKeys } from 'components/atoms/icon';
import Input from './input';

export default {
  ...exportConfig,
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    error: { type: 'string', defaultValue: '' },
    iconType: {
      options: iconKeys,
      defaultValue: 'edit',
      control: 'select',
    },
    isWithIcon: { defaultValue: false },
    labelName: { type: 'string', defaultValue: '' },
    message: { type: 'string', defaultValue: '' },
    name: { type: 'string', defaultValue: 'storybook-input' },
    type: {
      options: ['text', 'date', 'file', 'tel', 'email', 'password'],
      defaultValue: 'text',
      control: 'select',
    },
    disabled: { type: 'boolean', defaultValue: false },
    placeholder: { type: 'string', defaultValue: '' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ disabled, ...args }) => (
  <Input {...args} disabled={disabled} />
);

export const Standard = Template.bind({});
Standard.args = {
  labelName: 'Поле ввода',
  placeholder: 'Введите текст...',
};

export const Error = Template.bind({});
Error.args = {
  isValid: false,
  error: 'Текст ошибки',
};
