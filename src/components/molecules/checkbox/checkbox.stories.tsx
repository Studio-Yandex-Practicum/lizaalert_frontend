import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './checkbox';

export default {
  title: 'Molecules/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  labelText,
  name,
  ...args
}) => <Checkbox labelText="Текст чекбокса" name="storybook" {...args} />;

export const Default = Template.bind({});

export const Radio = Template.bind({});
Radio.args = {
  isRadio: true,
};
