import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import HeaderLink from './header-link';
import { iconKeys } from '../../atoms/icon/icons';

export default {
  title: 'Molecules/HeaderLink',
  component: HeaderLink,
  decorators: [withRouter],
  argTypes: {
    text: { type: 'string', defaultValue: 'Ссылка c иконкой', control: 'text' },
    iconType: {
      options: iconKeys,
      defaultValue: 'calendar',
      control: 'select',
    },
    link: { type: 'string', defaultValue: '/123', control: 'text' },
  },
} as ComponentMeta<typeof HeaderLink>;

const Template: ComponentStory<typeof HeaderLink> = ({
  text,
  link,
  iconType,
}) => <HeaderLink text={text} iconType={iconType} link={link} />;

export const Default = Template.bind({});
