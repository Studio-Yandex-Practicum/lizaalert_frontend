import { useParams } from 'react-router-dom';
import CourseOverview from '../../organisms/course-overview/course-overview';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
    </div>
  );
}

export default Course;
