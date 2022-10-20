import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import CourseBenefits, { defaultList } from './course-benefits';

export default {
  ...exportConfig,
  title: 'Organisms/CourseBenefits',
  component: CourseBenefits,
  argTypes: {
    benefitsList: { defaultValue: defaultList },
  },
} as ComponentMeta<typeof CourseBenefits>;

const Template: ComponentStory<typeof CourseBenefits> = ({
  benefitsList,
  ...args
}) => <CourseBenefits benefitsList={benefitsList} {...args} />;

export const Base = Template.bind({});
