import { Card } from 'components/atoms/card';
import { TheoryLessonProps } from './types';

// Временный компонент-заглушка, необходимо переписать

/**
 * Компонент теоретического урока.
 * */

function TheoryLesson({ content }: TheoryLessonProps) {
  return (
    <Card>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{__html: content}}/>
    </Card>
  );
}

export default TheoryLesson;
