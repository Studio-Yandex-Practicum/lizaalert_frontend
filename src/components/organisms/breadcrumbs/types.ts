export type BreadcrumbPath = 'course' | 'chapter' | 'lesson';

export type ServerBreadcrumbData = {
  id: number;
  title: string;
};
export type ClientBreadcrumbData = {
  path: string;
  title: string;
};

export type ServerBreadcrumbs = Record<
  Exclude<BreadcrumbPath, 'lesson'>,
  ServerBreadcrumbData
>;
export type ClientBreadcrumbs = Record<BreadcrumbPath, ClientBreadcrumbData>;

export type BreadcrumbsProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Breadcrumbs, которые прилетели с бэка */
  breadcrumbs: ServerBreadcrumbs;
  /** ID урока для добавления в breadcrumbs */
  currentLessonId: number;
  /** Title урока для добавления в breadcrumbs */
  currentLessonTitle: string;
};
