import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import { Card } from '../../templates';

import styles from './video-lesson.module.scss';

function VideoLesson({ source }) {
  return (
    <Card className={styles.container}>
      <Heading level={1} size="l" className={styles.heading}>
        Видео
      </Heading>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.video}
          height="456"
          src={source}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}

VideoLesson.propTypes = {
  source: PropTypes.string.isRequired,
};

export default VideoLesson;
