import { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from './accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ title, ...args }) => (
  <Accordion title="Заголовок" {...args}>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </span>
  </Accordion>
);

export const Default = Template.bind({});

export const Opened = Template.bind({});
Opened.args = {
  open: true,
};

export const WithButtonText = Template.bind({});
WithButtonText.args = {
  button: 'text',
};

export const WithMediumTitle = Template.bind({});
WithMediumTitle.args = {
  titleSize: 'm',
  titleWeight: 'regular',
};
