import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectLesson } from '../../../store/lesson/selectors';
import fetchLessonByIdAction from '../../../store/lesson/thunk';

import {
  Breadcrumbs,
  TestContent,
  PreviewWebinar,
  CourseContent,
  VideoLesson,
  NavigationButtons,
} from '../../organisms';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';
// import mockTest from '../../../services/mock/test-preview.json';
import TheoryLesson from '../../organisms/theory-lesson/theory-lesson';

function Lesson() {
  const { lessonId, topicId, courseId } = useParams();
  const dispatch = useDispatch();
  const lesson = useSelector(selectLesson);
  const navigation = useNavigate();
  const [pred, setPred] = useState('');
  const [sled, setSled] = useState('');
  const [backIsDisabled, setBackIsDisabled] = useState(false);
  const [forwardIsDisabled, setForwardIsDisabled] = useState(false);

  useEffect(() => {
    dispatch(fetchLessonByIdAction(lessonId));

    bbb();
  }, [dispatch, lessonId]);

  function bbb() {
    const aaa = mockCourseContent.map((topic) =>
      topic.lessons.map((les) => `${courseId}/${topic.id}/${les.id}`)
    );

    const ccc = aaa.reduce((init, curr) => init.concat(curr));

    const index = ccc.indexOf(`${courseId}/${topicId}/${lessonId}`);

    setPred(ccc[index - 1]);
    setSled(ccc[index + 1]);

    if (!ccc[index - 1]) {
      setBackIsDisabled(true);
    } else {
      setBackIsDisabled(false);
    }

    if (!ccc[index + 1]) {
      setForwardIsDisabled(true);
    } else {
      setForwardIsDisabled(false);
    }
  }

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
          <NavigationButtons
            classNameForContainer={styles['nav-buttons']}
            onClickBack={() => {
              navigation(pred, { replace: true });
            }}
            onClickForward={() => {
              navigation(sled, { replace: true });
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
    </div>
  );
}

export default Lesson;
