import { Card } from '../../atoms/card';
import { TheoryLessonProps } from './types';

// Временный компонент-заглушка, необходимо переписать

/**
 * @description Компонент теоретического урока
 *
 * @props
 * - content - string - HTML-разметка теории
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
