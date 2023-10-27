import type { BreadcrumbData } from '../../components/organisms/breadcrumbs/index';

export type LessonBreadcrumbs = {
  courses: BreadcrumbData;
  course: BreadcrumbData;
  chapter: BreadcrumbData;
  currentLesson: BreadcrumbData;
};
