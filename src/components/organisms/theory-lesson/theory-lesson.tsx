import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from 'components/atoms/card';
import { TheoryLessonProps } from './types';

// Временный компонент-заглушка, необходимо переписать

/**
 * Компонент теоретического урока.
 * */

export const TheoryLesson: FC<TheoryLessonProps> = ({ content }) => (
  <Card>
    <ReactMarkdown>{content}</ReactMarkdown>
  </Card>
);
