import PropTypes from 'prop-types';
import { Button } from '../../molecules';
import Card from '../card/card';
import styles from './preview-vebinar.module.scss';

/**
 * @description Компонент превью вебинара.
 *
 * - date - string - дата вебинара
 * - link - string - ссылка на вебинар
 */

function PreviewVebinar({ date, link }) {
  const dateArr = date.split(' ');

  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>Вебинар</h2>
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

PreviewVebinar.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PreviewVebinar;
