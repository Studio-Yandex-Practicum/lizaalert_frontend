import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { textStub } from 'stories/constants';
import Accordion from './accordion';

export default {
  ...exportConfig,
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {
    children: { type: 'string', defaultValue: textStub },
    title: { defaultValue: 'Заголовок' },
    titleSize: { defaultValue: 'l' },
    titleWeight: { defaultValue: 'bold' },
    button: { defaultValue: 'icon' },
    open: { defaultValue: false },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Base = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  open: true,
};

export const WithTextButton = Template.bind({});
WithTextButton.args = {
  button: 'text',
};

export const WithMediumTitle = Template.bind({});
WithMediumTitle.args = {
  titleSize: 'm',
  titleWeight: 'regular',
};
