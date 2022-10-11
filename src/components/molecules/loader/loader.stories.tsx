import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import Loader from './loader';

export default {
  ...exportConfig,
  title: 'Molecules/Loader',
  component: Loader,
  argTypes: {
    isAbsolute: { type: 'boolean', defaultValue: false },
    isFixed: { type: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Standard = Template.bind({});
