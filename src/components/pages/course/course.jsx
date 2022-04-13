import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCourseAction from '../../../store/course/thunk';
import { selectCourse } from '../../../store/course/selectors';
import { CourseBenefits, CourseOverview, CourseContent } from '../../organisms';

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(selectCourse);

  useEffect(() => {
    dispatch(fetchCourseAction(courseId));
  }, []);

  return (
    <div>
      <p>Single course page. Course id: {course.id}</p>
      <CourseOverview />
      <CourseContent />
      <CourseBenefits />
    </div>
  );
}

export default Course;
