import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import NavigationButtons from './navigation-buttons';

export default {
  ...exportConfig,
  title: 'Organisms/NavigationButtons',
  component: NavigationButtons,
  argTypes: {
    view: { defaultValue: 'main' },
    disabledBack: { defaultValue: false },
    disabledForward: { defaultValue: false },
  },
} as ComponentMeta<typeof NavigationButtons>;

const Template: ComponentStory<typeof NavigationButtons> = (args) => (
  <NavigationButtons {...args} />
);

export const Base = Template.bind({});
