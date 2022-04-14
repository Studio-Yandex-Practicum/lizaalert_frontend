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

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const title = useSelector(selectCourseTitle);
  const isLoading = useSelector(selectCourseLoading);

  useEffect(() => {
    dispatch(fetchCourseAction(courseId));
  }, [dispatch]);

  let pageContent;

  if (isLoading) {
    pageContent = <p>Loading...</p>;
  } else {
    pageContent = <h1>{title}</h1>;
  }

  return (
    <div>
      {pageContent}
      <CourseOverview />
      <CourseContent content={mockCourseContent} />
      <CourseBenefits />
    </div>
  );
}

export default Course;
