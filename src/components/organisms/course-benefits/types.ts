export type BenefitType = {
  id: number;
  title: string;
  description: string;
};

export type CourseBenefitsProps = {
  benefitsList?: BenefitType[];
};
