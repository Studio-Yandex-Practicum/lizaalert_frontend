export type BenefitType = {
  /** id навыка. */
  id: number;
  /** Заголовок навыка. */
  title: string;
  /** Краткое описание навыка. */
  description: string;
};

export type CourseBenefitsProps = {
  /** Массив объектов навыков, получаемых на курсе. Объект темы содержит id, title, description. */
  benefitsList?: BenefitType[];
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
