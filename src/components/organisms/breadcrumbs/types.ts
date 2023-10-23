export type BreadcrumbData = {
  path: string;
  title: string;
  notActive?: boolean;
};

export type BreadcrumbsType = BreadcrumbData[];

export type BreadcrumbsProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Breadcrumbs */
  breadcrumbs: BreadcrumbsType;
};
