import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { iconKeys } from 'components/atoms/icon';
import { exportConfig } from 'stories/config';
import HeaderLink from './header-link';

export default {
  ...exportConfig,
  title: 'Molecules/HeaderLink',
  component: HeaderLink,
  decorators: [withRouter],
  argTypes: {
    text: { defaultValue: 'Ссылка c иконкой' },
    iconType: {
      options: iconKeys,
      defaultValue: 'calendar',
      control: 'select',
    },
    link: { defaultValue: '/123' },
  },
} as ComponentMeta<typeof HeaderLink>;

const Template: ComponentStory<typeof HeaderLink> = (args) => (
  <HeaderLink {...args} />
);

export const Base = Template.bind({});
