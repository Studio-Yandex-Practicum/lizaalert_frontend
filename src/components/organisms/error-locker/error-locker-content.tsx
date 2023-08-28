import type { FC } from 'react';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { ErrorLockerContentProps } from './types';

export const ErrorLockerContent: FC<ErrorLockerContentProps> = ({
  heading,
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
    <Button text={buttonText} onClick={onClick} view="secondary" />
  </>
);
