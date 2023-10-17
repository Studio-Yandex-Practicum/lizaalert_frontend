import type { FC } from 'react';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { GENERAL_ERROR } from 'utils/constants';
import type { ErrorLockerContentProps } from './types';
import styles from './error-locker.module.scss';

export const ErrorLockerContent: FC<ErrorLockerContentProps> = ({
  heading = GENERAL_ERROR,
  subheading,
  buttonText = 'Попробовать ещё раз',
  onClick,
}) => (
  <>
    <Heading
      level={3}
      size="l"
      weight="bold"
      textAlign="center"
      text={heading}
    />
    {subheading && <P text={subheading} textAlign="center" />}
    <Button
      text={buttonText}
      onClick={onClick}
      view="secondary"
      className={styles.button}
    />
  </>
);
