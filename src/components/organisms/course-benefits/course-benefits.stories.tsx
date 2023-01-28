import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import CourseBenefits from './course-benefits';
import { defaultList } from './constants';

export default {
  ...exportConfig,
  title: 'Organisms/CourseBenefits',
  component: CourseBenefits,
  argTypes: {
    benefitsList: { defaultValue: defaultList },
  },
} as ComponentMeta<typeof CourseBenefits>;

const Template: ComponentStory<typeof CourseBenefits> = (args) => (
  <CourseBenefits {...args} />
);

export const Base = Template.bind({});
