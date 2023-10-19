import { FC, useCallback, useEffect } from 'react';
import { Heading } from 'components/atoms/typography';
import { Filter, FilterParams } from 'components/organisms/filter';
import {
  PaginationState,
  usePaginationState,
  WithInfiniteScroll,
} from 'components/organisms/with-infinite-scroll';
import { CoursePreview } from 'components/organisms/course-preview';
import { routes } from 'config';
import {
  AFTER_LOAD_PROCESS_MAP,
  ProcessEnum,
  SHOULD_LOAD_PROCESS_MAP,
} from 'utils/constants';
import type { CoursePreviewModel, GetCoursesData } from 'api/courses';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesProcess,
  selectCoursesTotal,
  selectEnrollStatus,
} from 'store/courses/selectors';
import {
  selectFilters,
  selectFiltersProcess,
} from 'store/courses-filters/selectors';
import { fetchCourses } from 'store/courses/thunk';
import { fetchFilters } from 'store/courses-filters/thunk';
import { resetCoursesState } from 'store/courses/slice';
import { useDebounce } from 'hooks/use-debounce';
import { useEvent } from 'hooks/use-event';
import type { FiltersState } from './types';
import styles from './courses.module.scss';

const initialPageSize = 8;

const Courses: FC = () => {
  const dispatch = useAppDispatch();

  const courses = useAppSelector(selectCourses);
  const enrollStatus = useAppSelector(selectEnrollStatus);
  const coursesTotal = useAppSelector(selectCoursesTotal) ?? 0;
  const coursesProcess = useAppSelector(selectCoursesProcess);
  const coursesError = useAppSelector(selectCoursesError);

  const filters = useAppSelector(selectFilters);
  const filtersProcess = useAppSelector(selectFiltersProcess);

  const [pagination, setPagination] = usePaginationState<FiltersState>({
    dataLength: courses.length,
    initialPageSize,
    state: {
      filters: {},
    },
  });

  const handleFilters = useDebounce(
    useEvent((params: FilterParams) => {
      if (AFTER_LOAD_PROCESS_MAP[coursesProcess]) {
        setPagination((prevState) => ({ ...prevState, filters: params }));
        void dispatch(resetCoursesState());
      }
    })
  );

  const fetchCoursesFilters = useCallback(() => {
    void dispatch(fetchFilters());
  }, []);

  const fetchCoursesOnIntersect = async (
    paginationState: PaginationState<FiltersState>
  ) => {
    let parameters: GetCoursesData = {
      page: paginationState.page,
      pageSize: paginationState.pageSize,
    };

    if (filtersProcess === ProcessEnum.Succeeded) {
      parameters = { ...parameters, params: paginationState.filters };
    }

    void dispatch(fetchCourses(parameters));
  };

  useEffect(() => {
    if (SHOULD_LOAD_PROCESS_MAP[filtersProcess]) {
      fetchCoursesFilters();
    }

    return () => {
      void dispatch(resetCoursesState());
    };
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

        <WithInfiniteScroll<CoursePreviewModel, FiltersState>
          pagination={pagination}
          setPagination={setPagination}
          data={courses}
          process={coursesProcess}
          actionOnIntersect={fetchCoursesOnIntersect}
          total={coursesTotal}
          error={coursesError}
          noDataHeading="Нет подходящих курсов"
          noDataMessage="Попробуйте выбрать другие фильтры"
        >
          <ul className={styles.list}>
            {courses.length > 0 &&
              courses.map((course) => (
                <li key={course.id}>
                  <CoursePreview
                    course={course}
                    enrollStatus={enrollStatus[course.id]}
                  />
                </li>
              ))}
          </ul>
        </WithInfiniteScroll>
      </div>
    </>
  );
};

export default Courses;
