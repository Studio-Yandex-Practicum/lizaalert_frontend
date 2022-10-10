import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  disableControls,
  exportConfig,
  flexLayoutColumn,
  flexLayoutRow,
} from 'config/storybook';
import Icon from './icon';
import icons, { iconKeys, IconType } from './icons';
import { IconProps } from './types';

export default {
  ...exportConfig,
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    size: { defaultValue: 'default' },
    type: {
      options: iconKeys,
      defaultValue: 'calendar',
      control: 'select',
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ type, ...args }) => (
  <Icon type={type} {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  onClick: undefined,
};

export const Button = Template.bind({});
Button.args = {
  onClick: () => 'Click!',
};

export const Sizes: ComponentStory<typeof Icon> = ({ type }) => (
  <div style={flexLayoutRow}>
    <Icon type={type} size="medium" />
    <Icon type={type} size="default" />
  </div>
);
Sizes.argTypes = disableControls('size', 'className');

export const IconList: ComponentStory<typeof Icon> = ({ type, ...args }) => (
  <div style={flexLayoutColumn}>
    {(Object.keys(icons) as IconType[]).map((key) => (
      <div key={key} style={flexLayoutRow}>
        <Icon type={key} {...args} />
        <code>{key}</code>
      </div>
    ))}
  </div>
);
IconList.args = {
  onClick: undefined,
};
IconList.argTypes = disableControls<keyof IconProps>('type');
