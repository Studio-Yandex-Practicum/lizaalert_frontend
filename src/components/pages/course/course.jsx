import { useParams } from 'react-router-dom';
import CourseContent from '../../organisms/course-content/course-content';
import CourseOverview from '../../organisms/course-overview/course-overview';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
      <CourseContent />
    </div>
  );
}

export default Course;
