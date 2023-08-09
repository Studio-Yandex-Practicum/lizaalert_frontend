import type { CoursesFiltersModel } from '../types';

const filters: CoursesFiltersModel = {
  count: 3,
  results: [
    {
      slug: 'course_format',
      name: 'Тематика',
      options: [
        {
          name: 'Инфогруппа',
          slug: 'infogroup',
        },
      ],
    },
    {
      slug: 'level',
      name: 'Уровень',
      options: [
        {
          name: 'Новичок',
          slug: 'novice',
        },
        {
          name: 'Бывалый',
          slug: 'experienced',
        },
        {
          name: 'Профессионал',
          slug: 'professional',
        },
      ],
    },
    {
      slug: 'course_status',
      name: 'Статус',
      options: [
        {
          name: 'Активный',
          slug: 'active',
        },
        {
          name: 'Неактивный',
          slug: 'inactive',
        },
        {
          name: 'Вы записаны',
          slug: 'booked',
        },
        {
          name: 'Пройден',
          slug: 'finished',
        },
      ],
    },
  ],
};

const coursesFilters = new Promise((resolve) => {
  resolve(filters);
});

export default coursesFilters;
