import type { FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { StyledLink } from 'components/molecules/styled-link';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { routes } from 'config';
import styles from './development.module.scss';

/**
 * Заглушка для тех страниц, что находятся в разработке и пока не готовы для прода.
 * */

const Development: FC = () => (
  <main className={styles.development}>
    <Heading
      level={1}
      size="xl"
      weight="bold"
      text="Страница находится в разработке"
    />
    <StyledLink href={routes.courses.path}>
      <TextWithIcon
        htmlTag="span"
        iconType="course"
        text="Вернуться к курсам"
      />
    </StyledLink>
  </main>
);

export default Development;
