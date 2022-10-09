import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'config/storybook';
import Heading from './heading';

export default {
  ...exportConfig,
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    title: { defaultValue: 'Заголовок' },
    isSubheading: { defaultValue: false },
    level: { defaultValue: 1 },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
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
