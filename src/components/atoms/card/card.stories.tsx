import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'config/storybook';
import Card from './card';

export default {
  ...exportConfig,
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    children: { type: 'string', defaultValue: 'Контент карточки' },
    htmlTag: { defaultValue: 'div' },
    noPadding: { defaultValue: false },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, ...args }) => (
  <Card {...args}>{children}</Card>
);

export const Standard = Template.bind({});

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
  noPadding: true,
};
