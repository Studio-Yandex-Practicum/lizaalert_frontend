import { Card, Heading } from '../../atoms';
import { Button } from '../../molecules';
import styles from './preview-webinar.module.scss';
import { convertDate } from '../../../utils/convert-date';

type PreviewWebinarProps = {
  date: string;
  link: string;
};

/**
 * @description Компонент превью вебинара.
 *
 * - date - string - дата вебинара
 * - link - string - ссылка на вебинар
 */

function PreviewWebinar({ date, link }: PreviewWebinarProps) {
  const webinarDate = <span>{convertDate(date)}</span>;
  const webinarTime = <span>{convertDate(date, { onlyTime: true })}</span>;

  return (
    <Card className={styles.card}>
      <Heading size="l" className={styles.title}>
        Вебинар
      </Heading>
      <p className={styles.text}>
        {['Вебинар стартует ', webinarDate, ' в ', webinarTime, ' МСК (GTM+3)']}
      </p>
      <a className={styles.link} href={link} target="blank">
        <Button className={styles.button}>Подключиться</Button>
      </a>
    </Card>
  );
}

export default PreviewWebinar;
