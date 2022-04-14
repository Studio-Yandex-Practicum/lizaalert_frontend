import { useParams } from 'react-router-dom';
import mockCourseContent from '../../../services/mock/course-content.json';
import { CourseBenefits, CourseOverview, CourseContent } from '../../organisms';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
      <CourseContent content={mockCourseContent} />
      <CourseBenefits />
    </div>
  );
}

export default Course;
