import { Heading, WithLink } from '../../atoms';
import { TextWithIcon } from '../../molecules';
import styles from './development.module.scss';
import { routes } from '../../../config';

function Development() {
  return (
    <main className={styles.development}>
      <Heading level={1} title="Страница находится в разработке" />
      <WithLink
        component={TextWithIcon}
        href={routes.courses.path}
        iconType="course"
        text="Вернуться к курсам"
      />
    </main>
  );
}

export default Development;
