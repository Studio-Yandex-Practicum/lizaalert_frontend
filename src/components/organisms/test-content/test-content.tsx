import { FC, useEffect, useState } from 'react';
import { Test } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import type { TestContentProps } from './types';
import { useTest } from '../test/hooks/use-test';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC<TestContentProps> = ({ lessonId }) => {
  const [renderTest, setRenderTest] = useState(false);
  const { setInitialState } = useTest();

  const toggleRender = () => setRenderTest(!renderTest);

  useEffect(() => {
    setInitialState(lessonId);
  }, [lessonId]);

  if (renderTest) {
    return <Test toggleRender={toggleRender} />;
  }

  return <TestPreview toggleRender={toggleRender} />;
};
