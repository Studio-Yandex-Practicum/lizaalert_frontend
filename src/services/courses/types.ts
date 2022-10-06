export type CoursePreviewType = {
  id: number;
  title: string;
  level: string;
  short_description: string;
  lessons_count: number;
  course_duration: number | null;
  course_status: 'active' | 'inactive' | 'finished' | 'booked';
  cover_path: string | null;
};

export type GetCoursesDataModel = {
  page?: number;
  pageSize?: number;
};

export type CoursesType = {
  count: number | null;
  results: CoursePreviewType[];
};
