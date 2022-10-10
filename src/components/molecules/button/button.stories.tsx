import { ComponentMeta, ComponentStory } from '@storybook/react';
import { iconKeys } from 'components/atoms/icon';
import { disableControls, exportConfig, flexLayoutRow } from 'config/storybook';
import Button from './button';
import { ButtonProps } from './types';

export default {
  ...exportConfig,
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: { control: false },
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

export const Standard = Template.bind({});

export const StandardWithIcon = Template.bind({});
StandardWithIcon.args = {
  iconName: 'calendar',
};

export const SecondaryDanger = Template.bind({});
SecondaryDanger.args = {
  view: 'secondary',
  hover: 'border',
};

export const Views: ComponentStory<typeof Button> = ({ text, ...args }) => (
  <div style={flexLayoutRow}>
    <Button text={text} {...args} view="primary" />
    <Button text={text} {...args} view="secondary" />
    <Button text={text} {...args} view="tertiary" />
    <Button text={text} {...args} view="text" />
  </div>
);
Views.argTypes = disableControls<keyof ButtonProps>('view');