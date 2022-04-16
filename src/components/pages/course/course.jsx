import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCourseAction from '../../../store/course/thunk';
import mockCourseContent from '../../../services/mock/course-content.json';
import {
  selectCourseLoading,
  selectCourseTitle,
} from '../../../store/course/selectors';
import { CourseBenefits, CourseOverview, CourseContent } from '../../organisms';
import { Heading } from '../../atoms';

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const title = useSelector(selectCourseTitle);
  const isLoading = useSelector(selectCourseLoading);

  useEffect(() => {
    dispatch(fetchCourseAction(courseId));
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Heading level={1}>{title}</Heading>
      <CourseOverview />
      <CourseContent content={mockCourseContent} />
      <CourseBenefits />
    </div>
  );
}

export default Course;
