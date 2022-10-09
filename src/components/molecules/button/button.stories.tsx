import { ComponentMeta, ComponentStory } from '@storybook/react';
import { iconKeys } from 'components/atoms/icon';
import { exportConfig } from 'config/storybook';
import Button from './button';

export default {
  ...exportConfig,
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    text: { defaultValue: 'Кнопка' },
    view: { defaultValue: 'primary' },
    iconName: {
      options: iconKeys,
      control: 'select',
    },
    hover: { defaultValue: 'default' },
    iconPosition: { defaultValue: 'back' },
    iconSize: { defaultValue: 'default' },
    type: { defaultValue: 'button' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ text, ...args }) => (
  <Button text={text} {...args} />
);

export const Primary = Template.bind({});

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  iconName: 'calendar',
};

export const Secondary = Template.bind({});
Secondary.args = {
  view: 'secondary',
};

export const SecondaryDanger = Template.bind({});
SecondaryDanger.args = {
  view: 'secondary',
  hover: 'border',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  view: 'tertiary',
};

export const Text = Template.bind({});
Text.args = {
  view: 'text',
};
