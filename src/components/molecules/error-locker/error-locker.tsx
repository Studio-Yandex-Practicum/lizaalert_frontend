import type { FC } from 'react';
import classnames from 'classnames';
import { Heading } from 'components/atoms/typography';
import { Card } from 'components/atoms/card';
import { Button } from 'components/molecules/button';
import { ErrorLockerProps } from './types';
import styles from './error-locker.module.scss';

const LockerContent: FC<
  Pick<ErrorLockerProps, 'message' | 'buttonText' | 'onClick'>
> = ({ message, buttonText = 'Попробовать ещё раз', onClick }) => (
  <>
    <Heading level={3} text={message} size="l" weight="bold" />
    <Button text={buttonText} onClick={onClick} />
  </>
);

export const ErrorLocker: FC<ErrorLockerProps> = ({
  className,
  isCard,
  ...props
}) => {
  const classNames = classnames(styles.locker, className);

  if (isCard) {
    return (
      <Card className={classNames}>
        <LockerContent {...props} />
      </Card>
    );
  }

  return (
    <div className={classNames}>
      <LockerContent {...props} />
    </div>
  );
};
