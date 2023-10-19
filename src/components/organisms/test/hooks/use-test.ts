import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsTestLoading, selectTest } from 'store/test/selectors';
import { fetchTest } from 'store/test/thunk';
import { Controls } from 'utils/constants';
import { TestModel } from 'api/lessons';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, setInitialState, handleButtonDisabledState, retake \}
 * */

export const useTest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);

  // TODO удалить типы после типизации стора
  const test = useAppSelector<TestModel>(selectTest);
  const isLoading = useAppSelector<boolean>(selectIsTestLoading);

  const dispatch = useAppDispatch();

  const setInitialState = (lessonId: number) => {
    void dispatch(fetchTest(lessonId));
    setIsSubmitted(false);
  };

  // TODO Запрос на сервер на пересдачу теста
  const retake = () => null;

  // TODO: настроить условия для percentArr.push, значений percent и checkedCount в связи с новой логикой валидации ответов с бэка, настроить условия для нового типа ответа 'text_answer'
  useEffect(() => {
    if (test.passing_score && test.questions && test.questions.length >= 0) {
      const percentArr: number[] = [];

      test.questions.forEach((question) => {
        if (question.question_type === Controls.RADIO) {
          question.content.forEach(() => {
            percentArr.push(100);
          });
        } else {
          const weight = 100 / question.content.length;
          let percent = 0;
          question.content.forEach(() => {
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
      setIsSuccess(resultPercent >= test.passing_score);
    }
  }, [test.passing_score, test.questions]);

  const handleButtonDisabledState = () => {
    let isDisabled = false;

    if (test.questions && test.questions.length > 0) {
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
    retake,
  };
};
