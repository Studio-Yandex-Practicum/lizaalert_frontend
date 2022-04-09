import { useParams } from 'react-router-dom';
import CourseContent from '../../organisms/course-content/course-content';
import CourseOverview from '../../organisms/course-overview/course-overview';
import mockCourseContent from '../../../services/mock/course-content.json';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
      <CourseContent content={mockCourseContent} />
    </div>
  );
}

export default Course;
