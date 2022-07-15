import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { StyledLink } from '../../molecules/styled-link';
import styles from './preview-webinar.module.scss';
import { PreviewWebinarProps } from './types';
import { convertDate } from '../../../utils/convert-date';

/**
 * @description Компонент превью вебинара.
 *
 * @props
 * - date - string, required - дата вебинара
 * - link - string, required - ссылка на вебинар
 */

function PreviewWebinar({ date, link }: PreviewWebinarProps) {
  const webinarDate = (
    <span key={1} className={styles.accent}>
      {convertDate(date)}
    </span>
  );
  const webinarTime = (
    <time key={2} className={styles.accent}>
      {convertDate(date, { onlyTime: true })}
    </time>
  );

  return (
    <Card className={styles.card} htmlTag="section">
      <Heading size="l" className={styles.title} title="Вебинар" />
      <p className={styles.text}>
        {['Вебинар стартует ', webinarDate, ' в ', webinarTime, ' МСК (GTM+3)']}
      </p>
      <StyledLink href={link} isExternal>
        <Button className={styles.button} text="Подключиться" />
      </StyledLink>
    </Card>
  );
}

export default PreviewWebinar;
