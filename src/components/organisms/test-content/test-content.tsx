import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/molecules/loader';
import { Test } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { createTest, fetchTest } from 'store/test/thunk';
import {
  selectIsTestInProgress,
  selectProcessCreationTest,
  selectTestProcess,
} from 'store/test/selectors';
import { resetTest } from 'store/test/slice';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();

  const isTestInProgress = useAppSelector(selectIsTestInProgress);
  const testProcess = useAppSelector(selectTestProcess);
  const testCreationProcess = useAppSelector(selectProcessCreationTest);
  const isTestLoading = LOADING_PROCESS_MAP[testProcess];

  useEffect(() => {
    if (lessonId) {
      void dispatch(fetchTest(lessonId));
    }

    return () => {
      dispatch(resetTest());
    };
  }, [lessonId]);

  const [isTestRendered, setIsTestRendered] = useState(false);

  const toggleRenderTest = () => {
    setIsTestRendered(!isTestRendered);
  };

  const handleStartTest = () => {
    if (lessonId) {
      void dispatch(createTest(lessonId));
    }
  };

  useEffect(() => {
    setIsTestRendered(!!isTestInProgress);
  }, [isTestInProgress]);

  useEffect(() => {
    if (testCreationProcess === ProcessEnum.Succeeded && !isTestRendered) {
      toggleRenderTest();
    }
  }, [testCreationProcess]);

  if (isTestLoading) {
    return <Loader />;
  }

  if (isTestRendered) {
    return <Test onShowPreview={toggleRenderTest} />;
  }

  return (
    <TestPreview
      onTestStart={handleStartTest}
      onReturnToTest={toggleRenderTest}
    />
  );
};
