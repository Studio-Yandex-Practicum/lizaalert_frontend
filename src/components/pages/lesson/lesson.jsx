import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectLesson } from '../../../store/lesson/selectors';
import fetchLessonByIdAction from '../../../store/lesson/thunk';

import {
  Breadcrumbs,
  CourseContent,
  NavigationButtons,
  PreviewWebinar,
  TestContent,
  VideoLesson,
} from '../../organisms';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';
// import mockTest from '../../../services/mock/test-preview.json';
import TheoryLesson from '../../organisms/theory-lesson/theory-lesson';
import { usePathnames } from '../../../hooks/usePathnames';

function Lesson() {
  const { lessonId, topicId, courseId } = useParams();
  const dispatch = useDispatch();
  const lesson = useSelector(selectLesson);
  const navigation = useNavigate();
  const [backLink, setBackLink] = useState('');
  const [forwardLink, setForwardLink] = useState('');
  const [backIsDisabled, setBackIsDisabled] = useState(false);
  const [forwardIsDisabled, setForwardIsDisabled] = useState(false);

  const pathnamesArray = usePathnames(mockCourseContent, courseId);

  useEffect(() => {
    dispatch(fetchLessonByIdAction(lessonId));
    getNavigationOptions();
  }, [dispatch, lessonId]);

  function getNavigationOptions() {
    const index = pathnamesArray.indexOf(`${courseId}/${topicId}/${lessonId}`);

    setBackLink(pathnamesArray[index - 1]);
    setForwardLink(pathnamesArray[index + 1]);

    if (!pathnamesArray[index - 1]) {
      setBackIsDisabled(true);
    } else {
      setBackIsDisabled(false);
    }

    if (!pathnamesArray[index + 1]) {
      setForwardIsDisabled(true);
    } else {
      setForwardIsDisabled(false);
    }
  }

  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} />
      <div className={styles.lesson}>
        <div className={styles.lessonContent}>
          {typeof lesson === 'undefined' ? (
            <div>Данные отсутствуют</div>
          ) : (
            <>
              {lesson.slug === 'lesson' && (
                <TheoryLesson content={lesson.content} />
              )}
              {lesson.slug === 'video' && (
                <VideoLesson source={lesson.source} />
              )}
              {lesson.slug === 'webinar' && (
                <PreviewWebinar date={lesson.date} link={lesson.source} />
              )}
              {lesson.slug === 'test' && <TestContent test={lesson} />}
            </>
          )}
          <NavigationButtons
            classNameForContainer={styles['nav-buttons']}
            onClickBack={() => {
              navigation(`../${backLink}`);
            }}
            onClickForward={() => {
              navigation(`../${forwardLink}`);
            }}
            disabledBack={backIsDisabled}
            disabledForward={forwardIsDisabled}
          />
        </div>
        <CourseContent
          content={mockCourseContent}
          type="inner"
          className={styles.courseContent}
        />
      </div>
    </>
  );
}

export default Lesson;
