import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../molecules';

function Lesson() {
  const { lessonId } = useParams();
  return (
    <div>
      <Breadcrumbs />
      <p>Lesson page. Lesson id: {lessonId}</p>
    </div>
  );
}

export default Lesson;
