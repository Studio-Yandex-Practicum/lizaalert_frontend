import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './card';
import { CardProps } from './types';

type TemplateProps = CardProps & {
  content?: string;
};

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    content: { type: 'string', defaultValue: 'Контент карточки' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({
  content,
  ...args
}: TemplateProps) => (
  <Card {...args}>
    <span>{content}</span>
  </Card>
);

export const Standard = Template.bind({});

export const WithoutPadding = Template.bind({});
WithoutPadding.args = {
  noPadding: true,
};
