export enum LessonType {
  Quiz = 'Quiz',
  Videolesson = 'Videolesson',
  Webinar = 'Webinar',
  Lesson = 'Lesson',
}

export enum LessonProgress {
  NotStarted = '0',
  Started = '1',
  Finished = '2',
}

export enum UserProgressStatus {
  Enrolled = 'enrolled',
  NotEnrolled = 'not_enrolled',
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
  lesson_progress: LessonProgress;
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
  lesson: number;
  chapter: number;
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
  start_date: string;
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
  /** Id текущего (последнего не пройденного) урока */
  current_lesson: CurrentLessonModel;
};
