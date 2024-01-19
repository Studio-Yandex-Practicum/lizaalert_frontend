import type { CoursesModel } from '../types';

const courses: CoursesModel = {
  count: 8,
  results: [
    {
      id: 1,
      title: 'Кинологическое направление',
      level: 'Бывалый',
      short_description:
        'Поисково-спасательная работа, следовая работа, а так же поиск тел погибших с помощью собак.',
      lessons_count: 144,
      start_date: '2023-01-20',
      course_duration: 144,
      course_status: 'active',
      cover_path: 'https://i.ibb.co/VttHZb2/1.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 2,
      title: 'Оперативные дежурные и прочие плюшки и сладости',
      level: 'Профессионал',
      short_description:
        'Оперативное реагирование, контроль поступающих заявок и звонков, распределение задач, помощь в решении вопросов, удалённое взаимодействие, проактивный бег, замедленный снег, горячий чай, незамысловатый текст, призванный разорвать контейнер, поскольку это очень длинный текст и он никогда не кончится.',
      lessons_count: 101,
      start_date: '2023-01-20',
      course_duration: 124,
      course_status: 'active',
      cover_path: 'https://i.ibb.co/7rb0FZs/2.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 3,
      title: 'Беспилотные летательные аппараты',
      level: 'Бывалый',
      short_description:
        'Применение БПЛА в поиске людей, а так же передача полученной с помощью техники информации спасательным службам.',
      lessons_count: 84,
      start_date: '2023-01-20',
      course_duration: 152,
      course_status: 'active',
      cover_path: 'https://i.ibb.co/0DQNPbT/3.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 4,
      title: 'Первая помощь',
      level: 'Бывалый',
      short_description:
        'Основы оказания первой помощи на поиске, юридические аспекты, базовые алгоритмы, разбор ошибок при оказания помощи на поиске.',
      lessons_count: 164,
      course_duration: 204,
      start_date: '2023-01-20',
      course_status: 'active',
      cover_path: 'https://i.ibb.co/bvySqGp/4.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 5,
      title: 'Инфогруппа',
      level: 'Новичок',
      short_description:
        'Создание ориентировок, заказ карт, связь через мини АТС, обеспечение поиска.',
      lessons_count: 87,
      start_date: '2023-01-20',
      course_duration: 90,
      course_status: 'active',
      cover_path: 'https://i.ibb.co/rsCGK20/5.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 6,
      title: 'Операторы 8-800',
      level: 'Новичок',
      short_description:
        'Приём заявок на поиск людей с последующей передачей информации инфоргам.',
      lessons_count: 99,
      start_date: '2023-01-20',
      course_duration: 120,
      course_status: 'booked',
      cover_path: 'https://i.ibb.co/XJJQ1tq/6.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 7,
      title: 'Группа коротких прозвонов',
      level: 'Новичок',
      short_description:
        'Прозвон больниц, ОВД, различных ведомств, иногда свидетелей и возможных свидетелей.',
      lessons_count: 55,
      start_date: '2023-01-20',
      course_duration: 87,
      course_status: 'inactive',
      cover_path: 'https://i.ibb.co/VjVRdY1/7.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
    {
      id: 8,
      title: 'Новичковая',
      level: 'Новичок',
      short_description:
        'Короткое описание курса. Поиск людей в лесу и в городе. Все поисковые мероприятия организуются силами добровольцев «ЛизаАлерт».',
      lessons_count: 30,
      start_date: '2023-01-20',
      course_duration: 50,
      course_status: 'finished',
      cover_path: 'https://i.ibb.co/p1yrc4Y/8.png',
      current_lesson: {
        lesson_id: 2,
        chapter_id: 1,
      },
    },
  ],
};

export default Promise.resolve(() => courses);
