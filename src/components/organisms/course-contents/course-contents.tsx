import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { ContentsItem } from 'components/organisms/contents-item';
import styles from './course-contents.module.scss';
import type { CourseContentsProps } from './types';

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
          <Typography
            htmlTag="h2"
            size="l"
            weight="bold"
            className={styles.heading}
            text="Содержание"
          />
          {contentItems}
        </>
      )}
    </Card>
  );
}

export default CourseContents;
