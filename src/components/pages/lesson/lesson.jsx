import { useParams } from 'react-router-dom';
import mockTest from '../../../services/mock/test-preview.json';
import { TestContent } from '../../organisms';

function Lesson() {
  const { lessonId } = useParams();

  return (
    <div>
      {/* DELETE mock data */}
      <p>Lesson page. Lesson id: {lessonId}</p>
      <TestContent test={mockTest[0]} />
    </div>
  );
}

export default Lesson;
