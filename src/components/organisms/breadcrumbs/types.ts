export type BreadcrumbsProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};

export type BreadcrumbType = {
  /** URL ссылки хлебной крошки. */
  path: string;
  /** Наименование хлебной крошки. */
  title: string;
};
