import { useNavigate } from 'react-router-dom';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { StyledLink } from '../../molecules/styled-link';
import { Button } from '../../molecules/button';
import styles from './not-found.module.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Card className={styles.card} htmlTag="section">
        <Heading
          level={2}
          size="xxl"
          title="Что-то пошло не так"
          className={styles.title}
        />
        <div className={styles.text}>
          <p>Страница потерялась</p>
          <p>
            А пока мы её ищем, ознакомьтесь с
            <StyledLink
              href="."
              className={styles.textLink}
              linkText=" нашими курсами"
            />
          </p>
        </div>
      </Card>
      <Button
        className={styles.button}
        type="button"
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        text="Назад"
        onClick={() => navigate(-1)}
      />
    </>
  );
}

export default NotFound;
