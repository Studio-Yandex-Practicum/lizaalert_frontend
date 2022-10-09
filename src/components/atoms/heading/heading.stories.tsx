import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from './heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading title="Заголовок" level={1} {...args} />
);

export const ExtraExtraLarge = Template.bind({});
ExtraExtraLarge.args = {
  size: 'xxl',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
};
