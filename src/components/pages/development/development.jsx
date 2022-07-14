import { Heading } from '../../atoms';
import { StyledLink, TextWithIcon } from '../../molecules';
import styles from './development.module.scss';
import { routes } from '../../../config';

function Development() {
  return (
    <main className={styles.development}>
      <Heading level={1} title="Страница находится в разработке" />
      <StyledLink href={routes.courses.path}>
        <TextWithIcon iconType="course" text="Вернуться к курсам" />
      </StyledLink>
    </main>
  );
}

export default Development;
