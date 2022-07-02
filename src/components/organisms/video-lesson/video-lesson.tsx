import { Card, Heading } from '../../atoms';
import styles from './video-lesson.module.scss';

type TagProps = {
  source: string;
};

function VideoLesson({ source }: TagProps) {
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

export default VideoLesson;
