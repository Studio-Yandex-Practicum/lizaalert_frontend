import type { FC } from 'react';
import classnames from 'classnames';
import { Markdown } from 'components/molecules/markdown';
import type { VideoLessonProps } from './types';
import styles from './video-lesson.module.scss';

/**
 * Компонент-карточка видео-урока. Видео вставляется в `iframe`.
 * Содержит опциональное описание видео.
 * */

export const VideoLesson: FC<VideoLessonProps> = ({
  source,
  description,
  className,
}) => (
  <>
    <iframe
      className={classnames(
        styles.video,
        { [styles.addMargin]: description },
        className
      )}
      src={source}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <Markdown>{description ?? ''}</Markdown>
  </>
);
