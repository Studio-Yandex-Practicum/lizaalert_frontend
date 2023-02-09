import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { StyledLink } from 'components/molecules/styled-link';
import { convertDate } from 'utils/convert-date';
import styles from './preview-webinar.module.scss';
import type { PreviewWebinarProps } from './types';

/**
 * Компонент-карточка превью вебинара.
 */

function PreviewWebinar({ date, link, className }: PreviewWebinarProps) {
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
    <Card className={classnames(styles.card, className)} htmlTag="section">
      <Heading
        level={2}
        weight="bold"
        size="l"
        className={styles.title}
        text="Вебинар"
      />

      <P>
        {['Вебинар стартует ', webinarDate, ' в ', webinarTime, ' МСК (GTM+3)']}
      </P>

      <StyledLink href={link} isExternal>
        <Button className={styles.button} text="Подключиться" />
      </StyledLink>
    </Card>
  );
}

export default PreviewWebinar;
