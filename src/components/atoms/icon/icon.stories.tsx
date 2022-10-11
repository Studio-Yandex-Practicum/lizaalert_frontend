import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
import Icon from './icon';
import { iconKeys, icons, IconType } from './icons';
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
  <div className="flex flex-row">
    <Icon type={type} size="medium" />
    <Icon type={type} size="default" />
  </div>
);
Sizes.argTypes = utils.disableControls('size', 'className');

export const IconList: ComponentStory<typeof Icon> = ({ type, ...args }) => (
  <div className="flex flex-column">
    {(Object.keys(icons) as IconType[]).map((key) => (
      <div key={key} className="flex flex-row">
        <Icon type={key} {...args} />
        <code>{key}</code>
      </div>
    ))}
  </div>
);
IconList.args = {
  onClick: undefined,
};
IconList.argTypes = utils.disableControls<keyof IconProps>('type');
