import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import Option from './option';

const mockOption = {
  id: 1,
  name: 'Опция в списке',
};

export default {
  ...exportConfig,
  title: 'Atoms/Option',
  component: Option,
  argTypes: {
    option: { defaultValue: mockOption },
  },
} as ComponentMeta<typeof Option>;

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />;

export const Standard = Template.bind({});
