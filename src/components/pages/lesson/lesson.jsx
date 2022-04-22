import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectLesson } from '../../../store/lesson/selectors';
import fetchLessonByIdAction from '../../../store/lesson/thunk';

import {
  Breadcrumbs,
  TestContent,
  PreviewWebinar,
  CourseContent,
  VideoLesson,
} from '../../organisms';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';
// import mockTest from '../../../services/mock/test-preview.json';
import TheoryLesson from '../../organisms/theory-lesson/theory-lesson';

function Lesson() {
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const lesson = useSelector(selectLesson);

  useEffect(() => {
    dispatch(fetchLessonByIdAction(lessonId));
  }, [dispatch, lessonId]);

  return (
    <div className="container">
      <Breadcrumbs className={styles.breadcrumbs} />
      <div className={styles.lesson}>
        <div className={styles.lessonContent}>
          {lesson.slug === 'lesson' && (
            <TheoryLesson content={lesson.content} />
          )}
          {lesson.slug === 'video' && <VideoLesson source={lesson.source} />}
          {lesson.slug === 'webinar' && (
            <PreviewWebinar date={lesson.date} link={lesson.source} />
          )}
          {lesson.slug === 'test' && <TestContent test={lesson} />}
        </div>
        <CourseContent
          content={mockCourseContent}
          type="inner"
          className={styles.courseContent}
        />
      </div>
    </div>
  );
}

export default Lesson;
