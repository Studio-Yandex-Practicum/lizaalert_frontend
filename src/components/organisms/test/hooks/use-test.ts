import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AVERAGE_TEST_RESULT,
  LOADING_PROCESS_MAP,
  ProcessEnum,
} from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectAnswersOnValidate,
  selectProcessCreationTest,
  selectProcessValidationTest,
  selectTest,
  selectTestProcess,
  selectTestResultPercent,
} from 'store/test/selectors';
import {
  resetTest,
  resetTestResult,
  updateAnswerReset,
} from 'store/test/slice';
import { createTest, validateTest } from 'store/test/thunk';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * IMPORTANT!!! Хук импортируется в нескольких компонентах, useEffect использовать с осторожностью
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, handleButtonDisabledState, retake, createNewTest, testResultData \}
 * */

export const useTest = () => {
  const { lessonId } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const test = useAppSelector(selectTest);
  const answers = useAppSelector(selectAnswersOnValidate);
  const testProcess = useAppSelector(selectTestProcess);
  const testCreationProcess = useAppSelector(selectProcessCreationTest);
  const testValidationProcess = useAppSelector(selectProcessValidationTest);
  const testResultPercent = useAppSelector(selectTestResultPercent);

  const isTestLoading = LOADING_PROCESS_MAP[testProcess];

  const dispatch = useAppDispatch();

  // TODO: Функционал на пересдачу теста
  // TODO: https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/422
  const handleRetakeTest = () => {
    if (lessonId) {
      void dispatch(createTest(lessonId));
    }
    dispatch(updateAnswerReset());
    dispatch(resetTestResult());
    setIsSuccess(false);
    setIsSubmitted(false);
  };

  const handleResetTestStore = () => {
    dispatch(resetTest());
  };

  const createNewTest = async () => {
    if (lessonId) {
      await dispatch(createTest(lessonId));
    }
  };

  const sendTestOnValidation = async (): Promise<void> => {
    if (lessonId && testCreationProcess === ProcessEnum.Succeeded) {
      await dispatch(validateTest({ id: lessonId, answers }));
      setIsSubmitted(true);
    }
  };

  const handleButtonDisabledState = () =>
    testCreationProcess === ProcessEnum.Failed ||
    LOADING_PROCESS_MAP[testValidationProcess] ||
    !test.questions?.some((question) =>
      question.content.some((answer) => answer.selected)
    );

  const handleSubmitTest = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void sendTestOnValidation();
  };

  useEffect(() => {
    if (testResultPercent) {
      setIsSuccess(testResultPercent >= AVERAGE_TEST_RESULT);
    }
  }, [testResultPercent]);

  return {
    isSubmitted,
    isSuccess,
    isTestLoading,
    test,
    handleSubmitTest,
    handleButtonDisabledState,
    handleRetakeTest,
    handleResetTestStore,
    createNewTest,
    testResultPercent,
  };
};
