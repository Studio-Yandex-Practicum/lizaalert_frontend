import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsTestLoading, selectTest } from 'store/test/selectors';
import { selectLesson } from 'store/lesson/selectors';
import { fetchTest } from 'store/test/thunk';
import { Controls } from 'utils/constants';
import type { TestType } from 'components/organisms/test-preview';
import type { TestQuestionListType, TestAnswersAfterParseType } from '../types';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, setInitialState, handleButtonDisabledState \}
 * */

export const useTest = () => {
  const { lessonId } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);

  // TODO удалить типы после типизации стора
  const test = useAppSelector<TestQuestionListType>(selectTest);
  const isLoading = useAppSelector<boolean>(selectIsTestLoading);
  const { passingScore } = useAppSelector<TestType>(selectLesson);

  const dispatch = useAppDispatch();

  const setInitialState = () => {
    if (lessonId) {
      void dispatch(fetchTest(+lessonId));
    }
    setIsSubmitted(false);
  };

  useEffect(() => {
    setInitialState();
  }, [lessonId]);

  useEffect(() => {
    if (test.questions?.length >= 0) {
      const percentArr: number[] = [];

      test.questions.forEach((question) => {
        const answersList = JSON.parse(
          question.answers
        ) as TestAnswersAfterParseType[];
        if (question.type === Controls.RADIO) {
          answersList.forEach((answer) => {
            if (answer.isChecked && answer.isCorrect) percentArr.push(100);
            if (answer.isChecked && !answer.isCorrect) percentArr.push(0);
          });
        } else {
          const weight = 100 / answersList.length;
          let percent = 0;
          answersList.forEach((answer) => {
            if (
              (answer.isChecked && answer.isCorrect) ||
              (!answer.isChecked && !answer.isCorrect)
            )
              percent += weight;
          });
          percentArr.push(percent);
        }
      });

      const middlePercent =
        percentArr.reduce((sum, percent) => sum + percent, 0) /
        percentArr.length;

      const resultPercent = Math.round(middlePercent);

      setTestResultPercent(resultPercent);
      setIsSuccess(resultPercent >= passingScore);
    }
  }, [passingScore, test.questions]);

  const handleButtonDisabledState = () => {
    let isDisabled = false;

    if (test.questions?.length > 0) {
      test.questions.forEach((question) => {
        let checkedCount = 0;
        const answersList = JSON.parse(
          question.answers
        ) as TestAnswersAfterParseType[];

        answersList.forEach((answer) => {
          if (answer.isChecked) checkedCount += 1;
        });

        if (checkedCount === 0) isDisabled = true;
      });
    }

    return isDisabled;
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsSubmitted(true);
  };

  return {
    isSubmitted,
    isSuccess,
    isLoading,
    testResultPercent,
    test,
    onSubmit,
    setInitialState,
    handleButtonDisabledState,
  };
};
