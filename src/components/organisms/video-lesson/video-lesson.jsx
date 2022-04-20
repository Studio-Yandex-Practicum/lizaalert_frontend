import PropTypes from 'prop-types';
import { Card, Heading } from '../../atoms';
import styles from './video-lesson.module.scss';

function VideoLesson({ source }) {
  return (
    <Card className={styles.container}>
      <Heading level={2} size="l" className={styles.heading}>
        Видео
      </Heading>
      <div>
        <iframe
          className={styles.video}
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
