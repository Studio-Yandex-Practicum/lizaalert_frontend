import { FC, useCallback, useEffect, useState } from 'react';
import { Heading } from 'components/atoms/typography';
import { Filter, FilterParams } from 'components/organisms/filter';
import {
  PaginationState,
  WithInfiniteScroll,
} from 'components/organisms/with-infinite-scroll';
import { CoursePreview } from 'components/organisms/course-preview';
import { routes } from 'config';
import { AFTER_LOAD_PROCESS_MAP } from 'utils/constants';
import type { GetCoursesData } from 'api/courses';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesProcess,
  selectCoursesTotal,
} from 'store/courses/selectors';
import {
  selectFilters,
  selectFiltersProcess,
} from 'store/courses-filters/selectors';
import { fetchCourses } from 'store/courses/thunk';
import { fetchFilters } from 'store/courses-filters/thunk';
import { resetCoursesState } from 'store/courses/slice';
import { useEvent } from 'hooks/use-event';
import { useDebounce } from 'hooks/use-debounce';
import styles from './courses.module.scss';

const initialPageSize = 8;

const Courses: FC = () => {
  const [filterParams, setFilterParams] = useState({});

  const dispatch = useAppDispatch();

  const courses = useAppSelector(selectCourses);
  const coursesTotal = useAppSelector(selectCoursesTotal) ?? 0;
  const coursesProcess = useAppSelector(selectCoursesProcess);
  const coursesError = useAppSelector(selectCoursesError);

  const filters = useAppSelector(selectFilters);
  const filtersProcess = useAppSelector(selectFiltersProcess);

  const handleFilters = useDebounce(
    useEvent((params: FilterParams) => {
      if (AFTER_LOAD_PROCESS_MAP[coursesProcess]) {
        dispatch(resetCoursesState());
        setFilterParams(params);
      }
    })
  );

  const fetchCoursesFilters = useCallback(() => {
    void dispatch(fetchFilters());
  }, []);

  const fetchCoursesOnIntersect = useEvent(
    async (paginationState: PaginationState) => {
      let parameters: GetCoursesData = paginationState;

      if (AFTER_LOAD_PROCESS_MAP[filtersProcess]) {
        parameters = { ...paginationState, params: filterParams };
      }

      void dispatch(fetchCourses(parameters));
    }
  );

  useEffect(() => {
    fetchCoursesFilters();
  }, []);

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
        <Filter
          className={styles.filters}
          filters={filters}
          process={filtersProcess}
          onFilterSelection={handleFilters}
          onError={fetchCoursesFilters}
        />

        <WithInfiniteScroll
          initialPageSize={initialPageSize}
          data={courses}
          process={coursesProcess}
          actionOnIntersect={fetchCoursesOnIntersect}
          total={coursesTotal}
          error={coursesError}
        >
          <ul className={styles.list}>
            {courses.length > 0 &&
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
};

export default Courses;
