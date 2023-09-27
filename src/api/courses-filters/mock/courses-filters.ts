import type { CoursesFiltersModel } from '../types';

const filters: CoursesFiltersModel = [
  {
    slug: 'course_format',
    name: 'Тематика',
    options: [
      {
        name: 'Инфогруппа',
        id: 1,
      },
    ],
  },
  {
    slug: 'level',
    name: 'Уровень',
    options: [
      {
        name: 'Новичок',
        id: 1,
      },
      {
        name: 'Бывалый',
        id: 2,
      },
      {
        name: 'Профессионал',
        id: 3,
      },
    ],
  },
  {
    slug: 'course_status',
    name: 'Статус',
    options: [
      {
        name: 'Активный',
        id: 1,
      },
      {
        name: 'Неактивный',
        id: 2,
      },
      {
        name: 'Вы записаны',
        id: 3,
      },
      {
        name: 'Пройден',
        id: 4,
      },
    ],
  },
];

const coursesFilters = new Promise((resolve) => {
  resolve(filters);
});

export default coursesFilters;
