import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import styles from './video-lesson.module.scss';
import { VideoLessonProps } from './types';

/**
 * @description Компонент-карточка видео-урока.
 *
 * @props
 * - source - string - url ссылки из YouTube
 * */

function VideoLesson({ source }: VideoLessonProps) {
  return (
    <Card className={styles.container}>
      <Heading size="l" className={styles.heading} title="Видео" />
      <iframe
        className={styles.video}
        src={source}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}

export default VideoLesson;
