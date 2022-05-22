import { useState } from 'react';
import { Card, Heading } from '../../atoms';
import { Button } from '../../molecules';
import {
  NewCourseContent,
  NewCourseDescription,
  NewCourseMain,
} from '../../organisms';
import styles from './new-course.module.scss';

function NewCourse() {
  const [activeTab, setActiveTab] = useState('main');

  function handleMain() {
    setActiveTab('main');
  }
  function handleDescription() {
    setActiveTab('description');
  }
  function handleContent() {
    setActiveTab('content');
  }

  return (
    <div className="container">
      <div className={styles.header}>
        <Heading size="xxl">Создание нового курса</Heading>
        <Button className={styles.createBtn}>Создать</Button>
      </div>
      <Card>
        <div className={styles.tabs}>
          <Button
            view="text"
            onClick={() => handleMain()}
            className={activeTab === 'main' && styles.active}
          >
            Основное
          </Button>
          <Button
            view="text"
            onClick={() => handleDescription()}
            className={activeTab === 'description' && styles.active}
          >
            Описание
          </Button>
          <Button
            view="text"
            onClick={() => handleContent()}
            className={activeTab === 'content' && styles.active}
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
    </div>
  );
}

export default NewCourse;
