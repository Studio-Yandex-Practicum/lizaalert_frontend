import { useState } from 'react';
import { Test } from '../test';
import { TestPreview } from '../test-preview';
import { TestContentProps } from './types';

function TestContent({ test }: TestContentProps) {
  const [renderTest, setRenderTest] = useState(test.inProgress);

  const toggleRender = () => setRenderTest(!renderTest);

  if (renderTest) {
    return <Test toggleRender={toggleRender} />;
  }

  return <TestPreview test={test} toggleRender={toggleRender} />;
}

export default TestContent;
