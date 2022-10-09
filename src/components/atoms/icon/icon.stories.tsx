import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from './icon';
import icons from './icons';
import { IconType } from './types';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ type, ...args }) => (
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

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  onClick: undefined,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  onClick: undefined,
};

export const Button = Template.bind({});
Button.args = {
  size: 'default',
  onClick: () => console.log('click'),
};
