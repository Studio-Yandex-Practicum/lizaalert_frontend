import classnames from 'classnames';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Accordion } from '../../molecules/accordion';
import { ContentsItem } from '../contents-item';
import styles from './course-contents.module.scss';
import { CourseContentsProps } from './types';

/**
 * @description Компонент оглавления. Представляет собой список со вложенным списком уроков или аккордеон.
 *
 * @props
 * - content - array of objects, required - массив глав: `id`, `topic` и массив `lessons`.
 * - type - enum ('main' | 'inner') - при `main` контент широкий, при `inner` - узкий.
 * - className - string - класс-миксин для стилизации внешнего контейнера.
 * */

function CourseContents({
  content,
  type = 'main',
  className = '',
}: CourseContentsProps) {
  const classes = classnames(className, styles.contents);

  const contentItems = content.map((item, index) => (
    <ContentsItem key={item.id} content={item} index={index} type={type} />
  ));

  return (
    <Card className={classes} htmlTag={type === 'inner' ? 'aside' : 'section'}>
      {type === 'main' && (
        <Accordion
          title="Содержание"
          button="text"
          className={styles.subtitle}
          open
        >
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
