import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { calculatePercent } from 'utils/calculate-percent';
import {
  AVERAGE_TEST_RESULT,
  LOADING_PROCESS_MAP,
  ProcessEnum,
} from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectAnswersOnValidate,
  selectProcessCreationTest,
  selectTest,
  selectTestProcess,
  selectTestResult,
} from 'store/test/selectors';
import { updateAnswerReset } from 'store/test/slice';
import { createTest, validateTest } from 'store/test/thunk';
import { validateAnswers } from 'utils/validateAnswers';
import { TestValidateType } from '../types';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, handleButtonDisabledState, retake, createNewTest, testResultData \}
 * */

export const useTest = () => {
  const { lessonId } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);
  const [testResultData, seTestResultData] = useState<TestValidateType[]>([]);

  const test = useAppSelector(selectTest);
  const answers = useAppSelector(selectAnswersOnValidate);
  const testProcess = useAppSelector(selectTestProcess);
  const testCreationProcess = useAppSelector(selectProcessCreationTest);
  const testResult = useAppSelector(selectTestResult);

  const isLoading = LOADING_PROCESS_MAP[testProcess];

  const dispatch = useAppDispatch();

  // TODO: Функционал на пересдачу теста
  // TODO: https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/422
  const retake = () => {
    if (lessonId) {
      void dispatch(createTest(lessonId));
    }
    dispatch(updateAnswerReset());
    seTestResultData([]);
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
    if (lessonId && testCreationProcess === ProcessEnum.Succeeded) {
      await dispatch(validateTest({ id: lessonId, answers }));
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (testResult) {
      const percent = calculatePercent(
        testResult.answers.length,
        testResult.score
      );
      setTestResultPercent(percent);
      setIsSuccess(percent >= AVERAGE_TEST_RESULT);

      const correctAnswers = testResult.result.map(
        ({ question_id, correct_answer_id }) => ({
          questionId: question_id,
          correctAnswers: correct_answer_id,
        })
      );
      const userAnswers = testResult.answers.map(
        ({ question_id, answer_id }) => ({
          questionId: question_id,
          answerId: answer_id,
        })
      );

      const validateResult: TestValidateType[] = validateAnswers(
        correctAnswers,
        userAnswers
      );

      seTestResultData(validateResult);
    }
  }, [testResult]);

  const handleButtonDisabledState = () =>
    testCreationProcess === ProcessEnum.Failed ||
    !test.questions?.some((question) =>
      question.content.some((answer) => answer.selected)
    );

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
    testResultData,
  };
};
