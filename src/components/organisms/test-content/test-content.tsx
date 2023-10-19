import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Test } from 'components/organisms/test';
import { TestPreview } from 'components/organisms/test-preview';
import { useAppDispatch, useAppSelector } from 'store';
import { selectTest } from 'store/test/selectors';
import { fetchTest } from 'store/test/thunk';
import { TestModel } from 'api/lessons';

/**
 * Компонент-тогглер между превью теста и карточкой с вопросами.
 * */

export const TestContent: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useAppDispatch();

  const test = useAppSelector<TestModel>(selectTest);

  useEffect(() => {
    if (lessonId) {
      void dispatch(fetchTest(+lessonId));
    }
  }, [lessonId]);

  const [renderTest, setRenderTest] = useState(test.in_progress);

  const toggleRender = () => setRenderTest(!renderTest);

  if (renderTest) {
    return <Test toggleRender={toggleRender} />;
  }

  return <TestPreview toggleRender={toggleRender} />;
};
