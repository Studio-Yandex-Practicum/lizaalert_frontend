import { useCallback, useState } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/heading';
import { Button } from 'components/molecules/button';
import { NewCourseContent } from 'components/organisms/new-course-content';
import { NewCourseDescription } from 'components/organisms/new-course-description';
import { NewCourseMain } from 'components/organisms/new-course-main';
import styles from './create-course.module.scss';
import { ActiveTab } from './types';

function CreateCourse() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('main');

  const handleMain = useCallback(() => {
    setActiveTab('main');
  }, []);
  const handleDescription = useCallback(() => {
    setActiveTab('description');
  }, []);
  const handleContent = useCallback(() => {
    setActiveTab('content');
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Heading size="xxl">Создание нового курса</Heading>
        <Button className={styles.createBtn}>Создать</Button>
      </div>
      <Card>
        <div className={styles.tabs}>
          <Button
            view="text"
            onClick={handleMain}
            className={classnames({ [styles.active]: activeTab === 'main' })}
          >
            Основное
          </Button>
          <Button
            view="text"
            onClick={handleDescription}
            className={classnames({
              [styles.active]: activeTab === 'description',
            })}
          >
            Описание
          </Button>
          <Button
            view="text"
            onClick={handleContent}
            className={classnames({ [styles.active]: activeTab === 'content' })}
          >
            Контент
          </Button>
          <Button
            view="text"
            className={styles.previewBtn}
            iconPosition="back"
            iconName="eye"
          >
            Предпросмотр
          </Button>
        </div>
        {activeTab === 'main' && <NewCourseMain />}
        {activeTab === 'description' && <NewCourseDescription />}
        {activeTab === 'content' && <NewCourseContent />}
      </Card>
    </>
  );
}

export default CreateCourse;
