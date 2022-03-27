import { useParams } from 'react-router-dom';

function Lesson() {
  const { lessonId } = useParams();
  return (
    <div>
      <p>Lesson page. Lesson id: {lessonId}</p>
    </div>
  );
}

export default Lesson;
