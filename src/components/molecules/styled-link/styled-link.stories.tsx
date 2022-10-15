import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { withRouter } from 'storybook-addon-react-router-v6';
import { utils } from 'stories/utils';
import StyledLink from './styled-link';
import { StyledLinkProps } from './types';

export default {
  ...exportConfig,
  title: 'Molecules/StyledLink',
  component: StyledLink,
  decorators: [withRouter],
  argTypes: {
    linkText: { type: 'string', defaultValue: 'Моя прекрасная ссылка' },
    href: { type: 'string', defaultValue: '/123' },
    children: { control: false },
    isExternal: { type: 'boolean', defaultValue: false },
    weight: { defaultValue: 'semibold' },
  },
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = (args) => (
  <StyledLink {...args} />
);

export const Base = Template.bind({});

export const Weights: ComponentStory<typeof StyledLink> = ({
  isExternal,
  href,
}) => (
  <div className="flex flex-column">
    <StyledLink
      isExternal={isExternal}
      linkText="Normal"
      href={href}
      weight="normal"
    />
    <StyledLink
      isExternal={isExternal}
      linkText="Semibold"
      href={href}
      weight="semibold"
    />
    <StyledLink
      isExternal={isExternal}
      linkText="Bold"
      href={href}
      weight="bold"
    />
  </div>
);
Weights.argTypes = utils.disableControls<keyof StyledLinkProps>(
  'weight',
  'linkText'
);
