import CoursePreview from '../../organisms/course-preview/course-preview';
import mockCourses from '../../../services/mock/courses.json';

function Courses() {
  return (
    <div>
      {/* delete mock data */}
      <p>Courses page</p>
      {mockCourses.map((course) => (
        <div key={course.id}>
          <CoursePreview course={course} />
          <div style={{ marginBottom: '24px' }} />
        </div>
      ))}
    </div>
  );
}

export default Courses;
