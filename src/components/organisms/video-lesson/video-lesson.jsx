import { Heading } from '../../atoms';
import { Card } from '../../templates';

import styles from './video-lesson.module.scss';

function VideoLesson() {
  return (
    <Card className={styles.container}>
      <Heading level={1} size="l" className={styles.heading}>
        Видео
      </Heading>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.video}
          height="456"
          src="https://www.youtube.com/embed/elDsY6yS9H8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
}

export default VideoLesson;
