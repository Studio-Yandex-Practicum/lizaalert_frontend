import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './button';

export default {
  title: 'Molecules/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ text, ...args }) => (
  <Button text="Кнопка" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  view: 'primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  view: 'primary',
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
