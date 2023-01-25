import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { iconKeys } from 'components/atoms/icon';
import TextWithIcon from './text-with-icon';

export default {
  ...exportConfig,
  title: 'Molecules/TextWithIcon',
  component: TextWithIcon,
  argTypes: {
    text: { type: 'string', defaultValue: 'Текст с иконкой' },
    iconType: {
      options: iconKeys,
      defaultValue: 'calendar',
      control: 'select',
    },
    color: { defaultValue: 'dark-primary' },
    isReverse: { defaultValue: false },
  },
} as ComponentMeta<typeof TextWithIcon>;

const Template: ComponentStory<typeof TextWithIcon> = (args) => (
  <TextWithIcon {...args} />
);

export const Base = Template.bind({});
