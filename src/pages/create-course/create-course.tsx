import { useCallback, useState } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { NewCourseContent } from 'components/organisms/new-course-content';
import { NewCourseDescription } from 'components/organisms/new-course-description';
import { NewCourseMain } from 'components/organisms/new-course-main';
import styles from './create-course.module.scss';
import type { Tab } from './types';

const tabs: Record<Tab, { id: Tab; component: JSX.Element }> = {
  main: {
    id: 'main',
    component: <NewCourseMain />,
  },
  description: {
    id: 'description',
    component: <NewCourseDescription />,
  },
  content: {
    id: 'content',
    component: <NewCourseContent />,
  },
};

function CreateCourse() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs.main.id);

  const handleMain = useCallback(() => {
    setActiveTab(tabs.main.id);
  }, []);
  const handleDescription = useCallback(() => {
    setActiveTab(tabs.description.id);
  }, []);
  const handleContent = useCallback(() => {
    setActiveTab(tabs.content.id);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Heading
          level={2}
          weight="bold"
          size="xxl"
          text="Создание нового курса"
        />

        <Button className={styles.createBtn} text="Создать" />
      </div>

      <Card>
        <div className={styles.tabs}>
          <Button
            view="text"
            onClick={handleMain}
            text="Основное"
            className={classnames({
              [styles.active]: activeTab === tabs.main.id,
            })}
          />

          <Button
            view="text"
            onClick={handleDescription}
            text="Описание"
            className={classnames({
              [styles.active]: activeTab === tabs.description.id,
            })}
          />

          <Button
            view="text"
            onClick={handleContent}
            text="Контент"
            className={classnames({
              [styles.active]: activeTab === tabs.content.id,
            })}
          />

          <Button
            view="text"
            className={styles.previewBtn}
            iconName="eye"
            text="Предпросмотр"
          />
        </div>

        {tabs[activeTab].component}
      </Card>
    </>
  );
}

export default CreateCourse;
