import { LessonType, UserLessonProgress } from 'api/lessons';

export enum UserProgressStatus {
  Enrolled = 'enrolled',
  NotEnrolled = 'not_enrolled',
  Available = 'available',
  InProgress = 'in_progress',
  Completed = 'completed',
}

export type FAQModel = {
  /** id вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  question: string;
  /** Ответ в виде строки. */
  answer: string;
};

export type KnowledgeModel = {
  /** id навыка. */
  id: number;
  /** Заголовок-название навыка. */
  title: string;
  /** Описание навыка. */
  description: string;
};

export type LessonChapterModel = {
  /** id урока курса. */
  id: number;
  /** Номер урока в последовательности. */
  order_number: number;
  /** Продолжительность урока. */
  duration: number;
  /** Заголовок-название урока. */
  title: string;
  /** Тип урока. */
  lesson_type: LessonType;
  /** Статус прогресса урока. */
  user_lesson_progress: UserLessonProgress;
};

export type ChapterModel = {
  /** id главы курса. */
  id: number;
  /** Заголовок-название главы курса. */
  title: string;
  /** Список уроков главы курса. */
  lessons: LessonChapterModel[];
};

export type CurrentLessonModel = {
  chapter_id: Nullable<number>;
  lesson_id: Nullable<number>;
};

export type CourseModel = {
  /** id курса. */
  id: number;
  /** Заголовок-название курса. */
  title: string;
  /** Уровень, на который рассчитан курс. */
  level: string;
  /** Короткое описание курса. */
  full_description: string;
  /** Список часто задаваемых вопросов */
  faq: FAQModel[];
  /** Список навыков, получаемых на курсе */
  knowledge: KnowledgeModel[];
  /** Дата начала прохождения курса. */
  start_date: Nullable<string>;
  /** URL к обложке курса. */
  cover_path: Nullable<string>;
  /** Количество уроков в курсе. */
  lessons_count: number;
  /** Продолжительность курса в часах. */
  course_duration: Nullable<number>;
  /** Список глав курса. */
  chapters: ChapterModel[];
  /** Статус подписки на курс. */
  user_status?: UserProgressStatus;
};

export type EnrollModel = {
  user_status: UserProgressStatus;
  start_date: string;
};
