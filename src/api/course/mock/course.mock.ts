import type { CourseModel } from '../types';

const course = new Promise<CourseModel>((resolve) => {
  resolve({
    id: 1,
    title: 'Кинологическое направление',
    level: 'Бывалый',
    full_description:
      'Наряду с профессиональными отрядами спасателей у нас активно развивается движение волонтёров. Мы начали готовить первых собак-спасателей в начале 2000-х и продолжаем заниматься этим непростым делом до сих пор. С 2018 года, совместно с руководством отряда «ЛизаАлерт» было принято решение о развитии кинологического направления в рамках отряда.',
    knowledge: null,
    start_date: '2022-02-22',
    cover_path: null,
    lessons_count: 24,
    course_duration: 64,
    chapters: [
      {
        id: 1,
        title:
          'В каких случаях перспективно применение следовых кинологических расчётов',
        lessons: [
          {
            id: 1,
            order_number: 0,
            duration: 1,
            title: 'Дрессировка поисково-спасательных собак',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 2,
            order_number: 1,
            duration: 2,
            title: 'Видео',
            lesson_type: 'Videolesson',
            lesson_status: 'Published',
          },
          {
            id: 3,
            order_number: 2,
            duration: 1,
            title: 'Урок',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 2,
        title:
          'Необходимые обеспечительные меры для успешного применения следовых (розыскных собак)',
        lessons: [
          {
            id: 1,
            order_number: 0,
            duration: 1,
            title: 'Дрессировка поисково-спасательных собак',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 3,
            order_number: 2,
            duration: 1,
            title: 'Урок',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 2,
            order_number: 1,
            duration: 2,
            title: 'Видео',
            lesson_type: 'Videolesson',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 3,
        title:
          'Особенности привлечения следовых расчётов на ПСР и особенности взаимодействия',
        lessons: [
          {
            id: 1,
            order_number: 0,
            duration: 1,
            title: 'Дрессировка поисково-спасательных собак',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 2,
            order_number: 1,
            duration: 2,
            title: 'Видео',
            lesson_type: 'Videolesson',
            lesson_status: 'Published',
          },
          {
            id: 3,
            order_number: 2,
            duration: 1,
            title: 'Урок',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 4,
        title:
          'Корректная постановка задачи кинологу и особенности её исполнения',
        lessons: [
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 5,
        title:
          'Работа «второго номера» совместно со следовым кинологическим расчётом',
        lessons: [
          {
            id: 1,
            order_number: 0,
            duration: 1,
            title: 'Дрессировка поисково-спасательных собак',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 2,
            order_number: 1,
            duration: 2,
            title: 'Видео',
            lesson_type: 'Videolesson',
            lesson_status: 'Published',
          },
          {
            id: 3,
            order_number: 2,
            duration: 1,
            title: 'Урок',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 6,
        title:
          'Оценка качества и особенности анализа результата проделанной следовым кинологическим расчётом работы',
        lessons: [
          {
            id: 1,
            order_number: 0,
            duration: 1,
            title: 'Дрессировка поисково-спасательных собак',
            lesson_type: 'Lesson',
            lesson_status: 'Published',
          },
          {
            id: 2,
            order_number: 1,
            duration: 2,
            title: 'Видео',
            lesson_type: 'Videolesson',
            lesson_status: 'Published',
          },
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
      {
        id: 7,
        title:
          'Особенности и пределы использования РПРС ом полученной в ходе применения специальной следовой собаки информации в целях успешного разрешения поисков',
        lessons: [
          {
            id: 4,
            order_number: 3,
            duration: 2,
            title: 'Вебинар',
            lesson_type: 'Webinar',
            lesson_status: 'Published',
          },
          {
            id: 5,
            order_number: 4,
            duration: 2,
            title: 'Тест',
            lesson_type: 'Quiz',
            lesson_status: 'Published',
          },
        ],
      },
    ],
  });
});

export default course;
