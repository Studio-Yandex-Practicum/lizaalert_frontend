import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import TestSuccessRate from './test-success-rate';

export default {
  ...exportConfig,
  title: 'Molecules/TestSuccessRate',
  component: TestSuccessRate,
  argTypes: {
    isSuccess: { defaultValue: true },
    testResultPercent: { defaultValue: 100 },
  },
} as ComponentMeta<typeof TestSuccessRate>;

const Template: ComponentStory<typeof TestSuccessRate> = (args) => (
  <TestSuccessRate {...args} />
);

export const Base = Template.bind({});
