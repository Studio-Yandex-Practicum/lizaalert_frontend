import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import FAQ from './faq';
import { initialData } from './constants';

export default {
  ...exportConfig,
  title: 'Organisms/FAQ',
  component: FAQ,
  argTypes: {
    questions: { defaultValue: initialData },
  },
} as ComponentMeta<typeof FAQ>;

const Template: ComponentStory<typeof FAQ> = (args) => <FAQ {...args} />;

export const Base = Template.bind({});
