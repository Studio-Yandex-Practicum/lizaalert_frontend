import { useParams } from 'react-router-dom';
import { CourseBenefits, CourseOverview, CourseContent } from '../../organisms';

function Course() {
  const { courseId } = useParams();

  return (
    <div>
      <p>Single course page. Course id: {courseId}</p>
      <CourseOverview />
      <CourseContent />
      <CourseBenefits />
    </div>
  );
}

export default Course;
