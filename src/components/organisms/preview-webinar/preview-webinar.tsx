import type { FC } from 'react';
import { P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { StyledLink } from 'components/molecules/styled-link';
import { convertDate } from 'utils/convert-date';
import styles from './preview-webinar.module.scss';
import type { PreviewWebinarProps } from './types';

/**
 * Компонент-карточка превью вебинара.
 */

export const PreviewWebinar: FC<PreviewWebinarProps> = ({ date, link }) => {
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
    <>
      <P textAlign="center">
        {['Вебинар стартует ', webinarDate, ' в ', webinarTime, ' МСК (GTM+3)']}
      </P>

      <StyledLink href={link} isExternal>
        <Button className={styles.button} text="Подключиться" />
      </StyledLink>
    </>
  );
};
