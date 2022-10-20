import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/heading';
import { Accordion } from 'components/molecules/accordion';
import { ContentsItem } from 'components/organisms/contents-item';
import styles from './course-contents.module.scss';
import { CourseContentsProps } from './types';

/**
 * Компонент содержания курса. Представляет собой список со вложенным списком уроков или аккордеон.
 * */

function CourseContents({
  content,
  type = 'main',
  className = '',
}: CourseContentsProps) {
  const classes = classnames(styles.contents, className);

  // Список уроков
  const contentItems = content?.map((item, index) => (
    <ContentsItem key={item.id} content={item} index={index} type={type} />
  ));

  return (
    <Card className={classes} htmlTag={type === 'inner' ? 'aside' : 'section'}>
      {type === 'main' && (
        <Accordion title="Содержание" button="text" open>
          <ul className={styles.list}>{contentItems}</ul>
        </Accordion>
      )}
      {type !== 'main' && (
        <>
          <Heading level={2} size="l" className={styles.heading}>
            Содержание
          </Heading>
          {contentItems}
        </>
      )}
    </Card>
  );
}

export default CourseContents;
