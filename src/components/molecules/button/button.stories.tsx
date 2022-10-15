import { ComponentMeta, ComponentStory } from '@storybook/react';
import { iconKeys } from 'components/atoms/icon';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
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
    disabled: { type: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ text, ...args }) => (
  <Button text={text} {...args} />
);

export const Base = Template.bind({});

export const StandardWithIcon = Template.bind({});
StandardWithIcon.args = {
  iconName: 'calendar',
};

export const SecondaryHover: ComponentStory<typeof Button> = ({
  text,
  ...args
}) => (
  <div className="flex flex-row">
    <Button text={text} {...args} view="secondary" hover="default" />
    <Button text={text} {...args} view="secondary" hover="border" />
  </div>
);
SecondaryHover.argTypes = utils.disableControls<keyof ButtonProps>(
  'view',
  'hover'
);

export const Views: ComponentStory<typeof Button> = ({ text, ...args }) => (
  <div className="flex flex-row">
    <Button text={text} {...args} view="primary" />
    <Button text={text} {...args} view="secondary" />
    <Button text={text} {...args} view="tertiary" />
    <Button text={text} {...args} view="text" />
  </div>
);
Views.argTypes = utils.disableControls<keyof ButtonProps>('view', 'hover');
