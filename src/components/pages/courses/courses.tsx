import { Heading } from 'components/atoms/heading';
import { Filter } from 'components/organisms/filter';
import {
  PaginationState,
  WithInfiniteScroll,
} from 'components/organisms/with-infinite-scroll';
import { CoursePreview } from 'components/organisms/course-preview';
import { routes } from 'config';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourses,
  selectCoursesLoading,
  selectCoursesTotal,
} from 'store/courses/selectors';
import fetchCoursesAction from 'store/courses/thunk';
import styles from './courses.module.scss';

const initialPaginationState = {
  page: 1,
  pageSize: 8,
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
