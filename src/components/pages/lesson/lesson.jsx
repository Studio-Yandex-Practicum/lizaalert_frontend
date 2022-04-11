import { Breadcrumbs } from '../../organisms';
import { useRedirectFromTopic } from '../../../hooks';

function Lesson() {
  const { lessonId } = useRedirectFromTopic();

  return (
    <div>
      <Breadcrumbs />
      <p>Lesson page. Lesson id: {lessonId}</p>
    </div>
  );
}

export default Lesson;
