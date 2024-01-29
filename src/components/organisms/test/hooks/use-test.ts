import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectAnswersOnValidate,
  selectIsTestLoading,
  selectTest,
  selectTestResult,
} from 'store/test/selectors';
import { updateAnswerReset } from 'store/test/slice';
import { createTest, validateTest } from 'store/test/thunk';
import { calculatePercent } from 'utils/calculate-percent';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, handleButtonDisabledState, retake, createNewTest \}
 * */

export const useTest = () => {
  const { lessonId } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);

  const test = useAppSelector(selectTest);
  const answers = useAppSelector(selectAnswersOnValidate);
  const isLoading = useAppSelector(selectIsTestLoading);

  const dispatch = useAppDispatch();

  // TODO: Функционал на пересдачу теста
  // TODO: https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/422
  const retake = () => {
    dispatch(updateAnswerReset());
    setIsSuccess(false);
    setTestResultPercent(0);
    setIsSubmitted(false);
  };

  const createNewTest = async () => {
    if (lessonId) {
      await dispatch(createTest(lessonId));
    }
  };

  const sendTestOnValidation = async (): Promise<void> => {
    if (lessonId) {
      await dispatch(validateTest({ id: lessonId, answersData: answers }));
      setIsSubmitted(true);
    }
  };

  const testResult = useAppSelector(selectTestResult);

  useEffect(() => {
    if (testResult) {
      const percent = calculatePercent(
        testResult.answers.length,
        testResult.score
      );
      setTestResultPercent(percent);
      setIsSuccess(percent >= 50);
    }
  }, [testResult]);

  const handleButtonDisabledState = () => {
    let isDisabled = false;

    if (test.questions?.length) {
      test.questions.forEach((question) => {
        let checkedCount = 0;

        question.content.forEach(() => {
          checkedCount += 1;
        });

        if (checkedCount === 0) isDisabled = true;
      });
    }

    return isDisabled;
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void sendTestOnValidation();
  };

  return {
    isSubmitted,
    isSuccess,
    isLoading,
    testResultPercent,
    test,
    onSubmit,
    handleButtonDisabledState,
    retake,
    createNewTest,
    testResult,
  };
};
