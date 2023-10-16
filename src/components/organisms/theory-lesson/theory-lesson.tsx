import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { Markdown } from 'components/molecules/markdown';
import type { TheoryLessonProps } from './types';

/**
 * Компонент теоретического урока.
 * */

export const TheoryLesson: FC<TheoryLessonProps> = ({ content }) => (
  <Card>
    <Markdown>{content}</Markdown>
  </Card>
);
