import { useNavigate } from 'react-router-dom';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { StyledLink } from 'components/molecules/styled-link';
import { Button } from 'components/molecules/button';
import { routes } from 'config';
import styles from './not-found.module.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Card className={styles.card} htmlTag="section">
        <Heading
          level={2}
          size="xxl"
          weight="bold"
          text="Что-то пошло не так"
          textAlign="center"
        />

        <P
          textAlign="center"
          text="Страница потерялась."
          className={styles.text}
        />

        <P textAlign="center" className={styles.text}>
          А пока мы её ищем, ознакомьтесь с
          <StyledLink href={routes.courses.path} linkText=" нашими курсами" />
        </P>
      </Card>

      <Button
        className={styles.button}
        view="secondary"
        iconName="arrowBack"
        iconPosition="left"
        text="Назад"
        onClick={() => navigate(-1)}
      />
    </>
  );
}

export default NotFound;
