import type { CourseModel } from '../types';

const course = new Promise<CourseModel>((resolve) => {
  resolve({
    id: 1,
    title: 'Кинологическое направление',
    level: 'Бывалый',
    full_description:
      'Наряду с профессиональными отрядами спасателей у нас активно развивается движение волонтёров. Мы начали готовить первых собак-спасателей в начале 2000-х и продолжаем заниматься этим непростым делом до сих пор. С 2018 года, совместно с руководством отряда «ЛизаАлерт» было принято решение о развитии кинологического направления в рамках отряда.',
    faq: [
      {
        id: 1,
        question: 'Как проходит обучение?',
        answer:
          'После записи на курс вам открывается доступ к учебными материалам. В конце каждой учебной главы необходимо сдать тест, и набрать пороговое значение баллов.',
      },
      {
        id: 2,
        question: 'Что если я не набрал достаточное количество баллов?',
        answer:
          'У вас будет несколько попыток пересдачи теста. Если вы безуспешно используете все попытки, то материалы курса становятся недоступными.',
      },
      {
        id: 3,
        question: 'Как долго доступны материалы?',
        answer: 'После окончания материалы доступны бессрочно.',
      },
    ],
    knowledge: [
      {
        id: 0,
        title: 'Поисково-спасательная работа',
        description:
          'Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности',
      },
      {
        id: 1,
        title: 'Следовая работа',
        description:
          'Обучение животного идти как по горячему, так и по остывшему следу',
      },
      {
        id: 2,
        title: 'Поиск тел погибших',
        description:
          'Поиск тел и их остатков с применением специально обученных собак',
      },
    ],
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
