import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/molecules/loader';
import { Test, useTest } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import { useAppDispatch } from 'store';
import { fetchTest } from 'store/test/thunk';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();
  const { isTestLoading, test, createNewTest, handleResetTestStore } =
    useTest();

  useEffect(() => {
    if (lessonId) {
      void dispatch(fetchTest(lessonId));
    }

    return () => {
      handleResetTestStore();
    };
  }, [lessonId]);

  const [renderTest, setRenderTest] = useState<boolean | undefined>(false);

  useEffect(() => {
    setRenderTest(test.in_progress);
  }, [test.in_progress]);

  const toggleRender = () => {
    setRenderTest(!renderTest);
  };

  const handleStartTest = () => {
    void createNewTest();
    toggleRender();
  };

  if (isTestLoading) {
    return <Loader />;
  }

  if (renderTest) {
    return <Test onShowPreview={toggleRender} />;
  }

  return (
    <TestPreview onTestStart={handleStartTest} onReturnToTest={toggleRender} />
  );
};
