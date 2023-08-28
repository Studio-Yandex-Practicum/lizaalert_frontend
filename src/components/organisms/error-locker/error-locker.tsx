import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { ErrorLockerContent } from './error-locker-content';
import type { ErrorLockerProps } from './types';
import styles from './error-locker.module.scss';

/**
 * Компонент-карточка или контейнер с заголовком, подзаголовком и кнопкой.
 * Использовать для показа ошибки загрузки, чтобы по клику на кнопку можно было вручную повторить последний запрос.
 * */

export const ErrorLocker: FC<ErrorLockerProps> = ({
  isCard,
  className,
  ...props
}) => {
  const classNames = classnames(styles.locker, className);

  if (isCard) {
    return (
      <Card className={classNames}>
        <ErrorLockerContent {...props} />
      </Card>
    );
  }

  return (
    <div className={classNames}>
      <ErrorLockerContent {...props} />
    </div>
  );
};
