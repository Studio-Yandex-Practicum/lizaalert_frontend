import { Heading } from '../../atoms/heading';
import { Filter } from '../../organisms/filter';
import styles from './courses.module.scss';
import { routes } from '../../../config';
import {
  PaginationState,
  WithInfiniteScroll,
} from '../../organisms/with-infinite-scroll';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  selectCourses,
  selectCoursesLoading,
  selectCoursesTotal,
} from '../../../store/courses/selectors';
import fetchCoursesAction from '../../../store/courses/thunk';
import { CoursePreview } from '../../organisms/course-preview';

const initialPaginationState = {
  page: 1,
  pageSize: 2,
};

function Courses() {
  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectCourses);
  const coursesTotal = useAppSelector(selectCoursesTotal) ?? 0;
  const isLoading = useAppSelector(selectCoursesLoading);

  const fetchCourses = (paginationState: PaginationState) => {
    void dispatch(fetchCoursesAction(paginationState));
  };

  return (
    <>
      <Heading
        level={2}
        size="xxl"
        title={routes.courses.title}
        className={styles.heading}
      />
      <div className={styles.courses}>
        <Filter className={styles.filters} />
        <ul className={styles.list}>
          <WithInfiniteScroll
            initialPaginationState={initialPaginationState}
            data={courses}
            isLoading={isLoading}
            actionOnIntersect={fetchCourses}
            total={coursesTotal}
          >
            {courses.length > 0 &&
              courses.map((course) => (
                <li key={course.id} className={styles.card}>
                  <CoursePreview course={course} />
                </li>
              ))}
          </WithInfiniteScroll>
        </ul>
      </div>
    </>
  );
}

export default Courses;
