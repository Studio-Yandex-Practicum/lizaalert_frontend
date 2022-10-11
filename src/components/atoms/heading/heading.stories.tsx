import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
import Heading from './heading';
import { HeadingProps } from './types';

export default {
  ...exportConfig,
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    children: { control: false },
    title: { defaultValue: 'Заголовок' },
    isSubheading: { defaultValue: false },
    level: { defaultValue: 2 },
    size: { defaultValue: 'xl' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Standard = Template.bind({});

export const Sizes: ComponentStory<typeof Heading> = ({ title }) => (
  <div className="flex flex-column">
    <Heading title={title} size="xxl" />
    <Heading title={title} size="xl" />
    <Heading title={title} size="l" />
    <Heading title={title} size="m" />
  </div>
);
Sizes.argTypes = utils.disableControls<keyof HeadingProps>(
  'isSubheading',
  'level',
  'size',
  'className'
);
