import type { BreadcrumbData } from 'components/organisms/breadcrumbs';

export type LessonBreadcrumbs = {
  courses: BreadcrumbData;
  course: BreadcrumbData;
  chapter: BreadcrumbData;
  currentLesson: BreadcrumbData;
};
