import type { LessonModel } from '../types';

const lessons: { [p: string]: { [k: string]: LessonModel } } = {
  1: {
    1: {
      id: 1,
      title: 'Дрессировка поисково-спасательных собак',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Lesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 1,
      additional: false,
      diploma: false,
    },
    2: {
      id: 2,
      title: 'Видео по теме',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Videolesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
    },
    3: {
      id: 3,
      title: 'Урок по теме',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Lesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 1,
      additional: false,
      diploma: false,
    },
    4: {
      id: 4,
      title: 'Вебинар по теме',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Webinar',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
    },
    5: {
      id: 5,
      title: 'Тест по теме',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Quiz',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
    },
  },
};

const coursesLesson = new Promise((resolve) => {
  const [, chapterId, lessonId] =
    window.location.pathname.match(/[1-9]/g) ?? [];
  const chapter = lessons[chapterId] ?? lessons[1];
  resolve(chapter[lessonId] ?? chapter[1]);
});

export default coursesLesson;
