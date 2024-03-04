import type { FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectAnswersOnValidate,
  selectProcessCreationTest,
  selectProcessValidationTest,
  selectTest,
  selectTestPassingScore,
  selectTestProcess,
  selectTestResult,
  selectTestResultPercent,
} from 'store/test/selectors';
import { resetTestResult, updateAnswerReset } from 'store/test/slice';
import { createTest, validateTest } from 'store/test/thunk';

/**
 * Хук реализует логику прохождения теста в компоненте Test.
 * Возвращает объект данных и обработчиков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, handleButtonDisabledState, retake, createNewTest, testResultData \}
 * */

export const useTest = () => {
  const { lessonId } = useParams();

  const test = useAppSelector(selectTest);
  const answers = useAppSelector(selectAnswersOnValidate);
  const testProcess = useAppSelector(selectTestProcess);
  const testCreationProcess = useAppSelector(selectProcessCreationTest);
  const testValidationProcess = useAppSelector(selectProcessValidationTest);
  const testResult = useAppSelector(selectTestResult);
  const testResultPercent = useAppSelector(selectTestResultPercent);
  const testPassingScore = useAppSelector(selectTestPassingScore);
  const isSuccess =
    typeof testResultPercent === 'number' &&
    typeof testPassingScore === 'number' &&
    testResultPercent >= testPassingScore;

  const isTestLoading = LOADING_PROCESS_MAP[testProcess];

  const isTestCreationLoading = LOADING_PROCESS_MAP[testCreationProcess];
  const isTestCreationFailed = testCreationProcess === ProcessEnum.Failed;
  const isTestCreationSucceeded = testCreationProcess === ProcessEnum.Succeeded;

  const isTestValidationLoading = LOADING_PROCESS_MAP[testValidationProcess];
  const isTestValidationSucceeded =
    testValidationProcess === ProcessEnum.Succeeded;

  const dispatch = useAppDispatch();

  // TODO: Функционал на пересдачу теста
  // TODO: https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/422
  const handleRetryTest = () => {
    if (lessonId) {
      void dispatch(createTest(lessonId));
      dispatch(updateAnswerReset());
      dispatch(resetTestResult());
    }
  };

  const sendTestOnValidation = async (): Promise<void> => {
    if (lessonId && isTestCreationSucceeded) {
      void dispatch(validateTest({ id: lessonId, answers }));
    }
  };

  const isSubmitButtonDisabled =
    isTestCreationFailed ||
    isTestCreationLoading ||
    isTestValidationLoading ||
    !test.questions?.some((question) =>
      question.content.some((answer) => answer.selected)
    );

  const handleSubmitTest = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void sendTestOnValidation();
  };

  return {
    isSuccess,
    isTestLoading,
    isTestValidationSucceeded,
    isSubmitButtonDisabled,
    test,
    handleSubmitTest,
    handleRetryTest,
    testResultPercent,
    testResult,
  };
};
