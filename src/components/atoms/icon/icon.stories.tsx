import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'config/storybook';
import Icon from './icon';
import icons, { iconKeys, IconType } from './icons';

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

export const Default = Template.bind({});
Default.args = {
  onClick: undefined,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  onClick: undefined,
};

export const Button = Template.bind({});
Button.args = {
  onClick: () => console.log('click'),
};

const IconListTemplate: ComponentStory<typeof Icon> = ({ type, ...args }) => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: 10 }}>
    {(Object.keys(icons) as IconType[]).map((key) => (
      <div
        key={key}
        style={{ display: 'flex', alignItems: 'center', columnGap: 10 }}
      >
        <Icon type={key} {...args} />
        <code>{key}</code>
      </div>
    ))}
  </div>
);

export const IconList = IconListTemplate.bind({});
IconList.args = {
  onClick: undefined,
};
