import type { AchievementsModel } from '../types';

export const achievements: AchievementsModel = [
  {
    name: 'Ачивка 1',
    description: 'Ачивка за знания',
    image:
      'https://cdn.create.vista.com/api/media/small/80562638/stock-vector-vector-fire-and-water-logo-or-icon',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'За страсть к знаниям',
    threshold_courses: null,
    threshold_course: null,
  },
  {
    name: 'Ачивка 2',
    description: 'Ачивка за мудрость',
    image:
      'https://cdn.create.vista.com/api/media/small/80562638/stock-vector-vector-fire-and-water-logo-or-icon',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'За мудрость и усидчивость',
    threshold_courses: null,
    threshold_course: null,
  },
  {
    name: 'Ачивка 3',
    description: 'Ачивка за мудрость',
    image:
      'https://cdn0.iconfinder.com/data/icons/business-concepts-3/470/Person_On_A_Mountaintop_Holding_A_Flag-1024.png',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'За мудрость и усидчивость',
    threshold_courses: null,
    threshold_course: null,
  },
];

export default Promise.resolve(() => achievements);
