import { Heading } from 'components/atoms/typography';
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
  selectCoursesError,
  selectCoursesIsLoading,
  selectCoursesTotal,
} from 'store/courses/selectors';
import { fetchCourses } from 'store/courses/thunk';
import styles from './courses.module.scss';

const initialPageSize = 8;

function Courses() {
  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectCourses);
  const coursesTotal = useAppSelector(selectCoursesTotal) ?? 0;
  const isLoading = useAppSelector(selectCoursesIsLoading);
  const error = useAppSelector(selectCoursesError);

  const fetchCoursesOnIntersect = async (paginationState: PaginationState) => {
    void dispatch(fetchCourses(paginationState));
  };

  return (
    <>
      <Heading
        level={2}
        size="xxl"
        weight="bold"
        text={routes.courses.title}
        className={styles.heading}
      />

      <div className={styles.courses}>
        <Filter className={styles.filters} />

        <WithInfiniteScroll
          initialPageSize={initialPageSize}
          data={courses}
          isLoading={isLoading}
          actionOnIntersect={fetchCoursesOnIntersect}
          total={coursesTotal}
          error={error}
        >
          <ul className={styles.list}>
            {courses &&
              courses.length > 0 &&
              courses.map((course) => (
                <li key={course.id}>
                  <CoursePreview course={course} />
                </li>
              ))}
          </ul>
        </WithInfiniteScroll>
      </div>
    </>
  );
}

export default Courses;
