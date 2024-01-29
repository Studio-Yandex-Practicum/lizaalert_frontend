import { Loader } from 'components/molecules/loader';
import { Test, useTest } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { fetchTest } from 'store/test/thunk';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, test, createNewTest } = useTest();

  useEffect(() => {
    if (lessonId) {
      void dispatch(fetchTest(lessonId));
    }
  }, [lessonId]);

  const [renderTest, setRenderTest] = useState<boolean | undefined>(false);

  useEffect(() => {
    setRenderTest(test.in_progress);
  }, [test.in_progress]);

  const toggleRender = () => {
    setRenderTest(!renderTest);
    void createNewTest();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (renderTest) {
    return <Test toggleRender={toggleRender} />;
  }

  return <TestPreview toggleRender={toggleRender} />;
};
