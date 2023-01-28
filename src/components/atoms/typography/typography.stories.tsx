import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
import Typography from './typography';
import type { TypographyProps } from './types';

export default {
  ...exportConfig,
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    children: { control: false },
    text: { defaultValue: 'Текстовый контент' },
    size: { defaultValue: 'm' },
    weight: { defaultValue: 'normal' },
    htmlTag: { defaultValue: 'p' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Base = Template.bind({});

export const Sizes: ComponentStory<typeof Typography> = ({ text }) => (
  <div className="flex flex-column">
    <Typography text={text} size="xxl" />
    <Typography text={text} size="xl" />
    <Typography text={text} size="l" />
    <Typography text={text} size="m" />
    <Typography text={text} size="s" />
  </div>
);
Sizes.argTypes = utils.disableControls<keyof TypographyProps>(
  'size',
  'className'
);
