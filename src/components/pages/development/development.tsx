import { Heading } from 'components/atoms/heading';
import { StyledLink } from 'components/molecules/styled-link';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { routes } from 'config';
import styles from './development.module.scss';

/**
 * Заглушка для тех страниц, что находятся в разработке и пока не готовы для прода.
 * */

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
