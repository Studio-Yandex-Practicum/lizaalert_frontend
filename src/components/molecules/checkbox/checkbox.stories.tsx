import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './checkbox';

export default {
  title: 'Molecules/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ labelText, ...args }) => (
  <Checkbox labelText="Текст чекбокса" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'storybook',
};

export const Radio = Template.bind({});
Radio.args = {
  isRadio: true,
  name: 'storybook-radio',
};
