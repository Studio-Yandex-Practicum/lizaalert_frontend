import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import styles from './video-lesson.module.scss';
import type { VideoLessonProps } from './types';

/**
 * Компонент-карточка видео-урока. Видео вставляется в `iframe`.
 * */

function VideoLesson({ source, className }: VideoLessonProps) {
  return (
    <Card className={classnames(styles.container, className)}>
      <Typography
        htmlTag="h2"
        size="l"
        weight="bold"
        className={styles.heading}
        text="Видео"
      />

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
