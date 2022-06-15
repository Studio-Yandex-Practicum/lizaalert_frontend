import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { TextWithIcon } from '../../molecules';
import styles from './development.module.scss';
import { routes } from '../../../config';

function Development() {
  return (
    <main className={styles.development}>
      <Heading level={1} title="Страница находится в разработке" />
      <Link to={routes.courses.path} className={styles.link}>
        <TextWithIcon iconType="course" text="Вернуться к курсам" />
      </Link>
    </main>
  );
}

export default Development;
