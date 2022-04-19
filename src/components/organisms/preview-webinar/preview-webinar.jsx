import PropTypes from 'prop-types';
import { Card, Heading } from '../../atoms';
import { Button } from '../../molecules';
import styles from './preview-webinar.module.scss';

/**
 * @description Компонент превью вебинара.
 *
 * - date - string - дата вебинара
 * - link - string - ссылка на вебинар
 */

function PreviewWebinar({ date, link }) {
  const dateArr = date.split(' ');

  return (
    <Card className={styles.card}>
      <Heading size="l" className={styles.title}>
        Вебинар
      </Heading>
      <p className={styles.text}>
        Вебинар стартует <span className={styles.date}>{dateArr[0]}</span> в{' '}
        <span className={styles.date}>{dateArr[1]}</span> МСК (GTM+3)
      </p>
      <a className={styles.link} href={link} target="blank">
        <Button className={styles.button}>Подключиться</Button>
      </a>
    </Card>
  );
}

PreviewWebinar.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PreviewWebinar;
