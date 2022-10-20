export type BenefitType = {
  id: number;
  title: string;
  description: string;
};

export type CourseBenefitsProps = {
  /**
   * Массив объектов навыков, получаемых на курсе. Объект темы содержит id, title, description.
   * */
  benefitsList?: BenefitType[];
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
