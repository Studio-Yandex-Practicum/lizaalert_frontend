import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { withRouter } from 'storybook-addon-react-router-v6';
import Header from './header';

export default {
  ...exportConfig,
  title: 'Templates/Header',
  component: Header,
  decorators: [withRouter],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Base = Template.bind({});
