import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { P } from '../../components/atoms/typography';
import { Breadcrumbs } from '../../components/organisms/breadcrumbs';
import { CourseContents } from '../../components/organisms/course-contents';
import { NavigationButtons } from '../../components/organisms/navigation-buttons';
import { PreviewWebinar } from '../../components/organisms/preview-webinar';
import { TestContent } from '../../components/organisms/test-content';
import { VideoLesson } from '../../components/organisms/video-lesson';
import { TheoryLesson } from '../../components/organisms/theory-lesson';
import styles from './lesson.module.scss';
import { selectLesson } from '../../store/lesson/selectors';
import { fetchLessonById } from '../../store/lesson/thunk';
import { usePathnames } from '../../hooks/use-pathnames';
import mockCourseContent from '../../api/mock/course-content.json';

function Lesson() {
  const { lessonId, topicId, courseId } = useParams();
  const dispatch = useDispatch();
  const { lesson } = useSelector(selectLesson);
  const navigation = useNavigate();
  const [backLink, setBackLink] = useState('');
  const [forwardLink, setForwardLink] = useState('');
  const [backIsDisabled, setBackIsDisabled] = useState(false);
  const [forwardIsDisabled, setForwardIsDisabled] = useState(false);

  const pathnamesArray = usePathnames(mockCourseContent, courseId);

  useEffect(() => {
    dispatch(fetchLessonById(lessonId));
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
          {!lesson ? (
            <P>Данные отсутствуют</P>
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

        <CourseContents
          content={mockCourseContent}
          type="inner"
          className={styles.courseContent}
        />
      </div>
    </>
  );
}

export default Lesson;
