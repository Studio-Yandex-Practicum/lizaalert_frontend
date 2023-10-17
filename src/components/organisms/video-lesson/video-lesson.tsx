import type { FC } from 'react';
import classnames from 'classnames';
import styles from './video-lesson.module.scss';
import type { VideoLessonProps } from './types';

/**
 * Компонент-карточка видео-урока. Видео вставляется в `iframe`.
 * */

export const VideoLesson: FC<VideoLessonProps> = ({ source, className }) => (
  <iframe
    className={classnames(styles.video, className)}
    src={source}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
