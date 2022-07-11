import { Filters, Levels, Statuses } from '../../../utils/constants';

export type FilterItem = {
  label: string;
  value: string;
  name: string;
};

export type SectionType = {
  name: Omit<FilterItem, 'name'>;
  options: FilterItem[];
};

export const filters: SectionType[] = [
  {
    name: { label: 'Категория', value: Filters.CATEGORY },
    options: [],
  },
  {
    name: { label: 'Тематика', value: Filters.THEME },
    options: [],
  },
  {
    name: { label: 'Уровень', value: Filters.LEVEL },
    options: [
      { label: 'Новичок', value: Levels.NEW, name: Filters.LEVEL },
      { label: 'Бывалый', value: Levels.EXPERIENCED, name: Filters.LEVEL },
      { label: 'Профессионал', value: Levels.PRO, name: Filters.LEVEL },
    ],
  },
  {
    name: { label: 'Статус', value: Filters.STATUS },
    options: [
      {
        label: 'Не активный',
        value: Statuses.INACTIVE,
        name: Filters.STATUS,
      },
      { label: 'Вы записаны', value: Statuses.BOOKED, name: Filters.STATUS },
      { label: 'Активный', value: Statuses.ACTIVE, name: Filters.STATUS },
      { label: 'Пройден', value: Statuses.FINISHED, name: Filters.STATUS },
    ],
  },
];
