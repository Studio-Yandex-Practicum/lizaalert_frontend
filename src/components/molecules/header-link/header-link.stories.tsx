import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { iconKeys } from 'components/atoms/icon';
import { exportConfig } from 'config/storybook';
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

const Template: ComponentStory<typeof HeaderLink> = ({
  text,
  link,
  iconType,
}) => <HeaderLink text={text} iconType={iconType} link={link} />;

export const Default = Template.bind({});
