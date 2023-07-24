import { FC, useState } from 'react';
import { Test } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import type { TestContentProps } from './types';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC<TestContentProps> = ({ test }) => {
  const [renderTest, setRenderTest] = useState(test.inProgress);

  const toggleRender = () => setRenderTest(!renderTest);

  if (renderTest) {
    return <Test toggleRender={toggleRender} />;
  }

  return <TestPreview test={test} toggleRender={toggleRender} />;
};
