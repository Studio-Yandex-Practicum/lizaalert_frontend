import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { TheoryLessonProps } from './types';

// Временный компонент-заглушка, необходимо переписать

/**
 * Компонент теоретического урока.
 * */

export const TheoryLesson: FC<TheoryLessonProps> = ({ content }) => (
  <Card>
    {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{__html: content}}/>
  </Card>
);
