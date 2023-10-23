export type BreadcrumbData = {
  path: string;
  title: string;
  notActive?: boolean;
};

export type LessonBreadcrumbs = {
  courses: BreadcrumbData;
  course: BreadcrumbData;
  chapter: BreadcrumbData;
  currentLesson: BreadcrumbData;
};
