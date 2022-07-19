import { Heading } from '../../atoms/heading';
import { StyledLink } from '../../molecules/styled-link';
import { TextWithIcon } from '../../molecules/text-with-icon';
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
