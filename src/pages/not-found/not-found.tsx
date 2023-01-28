import { useNavigate } from 'react-router-dom';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { StyledLink } from 'components/molecules/styled-link';
import { Button } from 'components/molecules/button';
import { routes } from 'config';
import styles from './not-found.module.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Card className={styles.card} htmlTag="section">
        <Typography
          htmlTag="h2"
          size="xxl"
          weight="bold"
          text="Что-то пошло не так"
          textAlign="center"
        />

        <Typography
          textAlign="center"
          text="Страница потерялась."
          className={styles.text}
        />

        <Typography textAlign="center" className={styles.text}>
          А пока мы её ищем, ознакомьтесь с
          <StyledLink href={routes.courses.path} linkText=" нашими курсами" />
        </Typography>
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
