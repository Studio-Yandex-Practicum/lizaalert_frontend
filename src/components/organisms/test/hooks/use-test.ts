import { FormEvent, useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { selectIsTestLoading, selectTest } from 'store/test/selectors';
import { Controls } from 'utils/constants';
import type { TestModel } from 'api/lessons';

/**
 * Хук реализует логику прохождения теста.
 * Возвращает объект данных и обработчков для отображения их в интерфейсе.
 *
 * @returns \{ isSubmitted, isSuccess, isLoading, testResultPercent, test, onSubmit, handleButtonDisabledState, retake \}
 * */

export const useTest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);

  // TODO удалить типы после типизации стора
  // TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/397
  const test = useAppSelector<TestModel>(selectTest);
  const isLoading = useAppSelector<boolean>(selectIsTestLoading);

  // TODO Функционал на пересдачу теста
  // TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/422
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
    handleButtonDisabledState,
    retake,
  };
};
