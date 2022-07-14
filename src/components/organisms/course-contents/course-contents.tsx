import classnames from 'classnames';
import { Card, Heading } from '../../atoms';
import { Accordion } from '../../molecules';
import ContentsItem, {
  ContentsItemType,
  CourseContentsType,
} from '../contents-item/contents-item';
import styles from './course-contents.module.scss';

type CourseContentsProps = {
  content: CourseContentsType[];
  type?: ContentsItemType;
  className?: string;
};

const defaultProps = {
  className: '',
  type: 'main',
};

/**
 * @description Компонент оглавления. Представляет собой список со вложенным списком уроков или аккордеон.
 *
 * @props
 * - content - array of objects - массив глав: `id`, `topic` и массив `lessons`.
 * - type - enum ('main' | 'inner') - при `main` контент широкий, при `inner` - узкий.
 * - className - string - класс-миксин для стилизации внешнего контейнера.
 * */

function CourseContents({ content, type, className }: CourseContentsProps) {
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

CourseContents.defaultProps = defaultProps;

export default CourseContents;
