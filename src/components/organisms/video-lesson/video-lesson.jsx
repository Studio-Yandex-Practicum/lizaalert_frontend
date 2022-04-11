import { Heading } from '../../atoms';
import VideoPlayer from '../../molecules/video-player/video-player';
import { Card } from '../../templates';

import styles from './video-lesson.module.scss';

function VideoLesson() {
  return (
    <Card className={styles.container}>
      <Heading level={1} size="l" className={styles.heading}>
        Видео
      </Heading>
      <VideoPlayer />
    </Card>
  );
}

export default VideoLesson;
