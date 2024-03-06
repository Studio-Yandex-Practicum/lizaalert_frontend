import { WebinarStatus, type WebinarModel } from '../types';

const webinar: WebinarModel = {
  id: 4,
  lesson: '4',
  description: 'Вебинар по теме',
  link: 'https://www.youtube.com/embed/OFntCmDmuQQ?si=uWfDmiaIA2E7isJJ',
  recording_link:
    'https://www.youtube.com/embed/OFntCmDmuQQ?si=uWfDmiaIA2E7isJJ',
  recording_description: 'Описание вебинара',
  cohort: 18,
  webinar_date: '2024-03-04T12:31:41+03:00',
  status: WebinarStatus.Completed,
};

export default Promise.resolve(() => webinar);
