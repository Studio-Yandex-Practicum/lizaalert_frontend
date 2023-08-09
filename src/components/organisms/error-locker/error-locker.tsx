import type { FC } from 'react';
import classnames from 'classnames';
import { Heading, P } from 'components/atoms/typography';
import { Card } from 'components/atoms/card';
import { Button } from 'components/molecules/button';
import type { ErrorLockerProps } from './types';
import styles from './error-locker.module.scss';

/**
 * Компонент-карточка или контейнер с заголовком, подзаголовком и кнопкой.
 * Использовать для показа ошибки загрузки, чтобы по клику на кнопку можно было вручную повторить последний запрос.
 * */

export const ErrorLocker: FC<ErrorLockerProps> = ({
  heading,
  subheading,
  buttonText = 'Попробовать ещё раз',
  isCard,
  onClick,
  className,
}) => {
  const classNames = classnames(styles.locker, className);

  const content = (
    <>
      <Heading
        level={3}
        size="l"
        weight="bold"
        textAlign="center"
        text={heading}
      />
      {subheading && <P text={subheading} textAlign="center" />}
      <Button text={buttonText} onClick={onClick} view="secondary" />
    </>
  );

  if (isCard) {
    return <Card className={classNames}>{content}</Card>;
  }

  return <div className={classNames}>{content}</div>;
};
