/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, type FC, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Markdown } from 'components/molecules/markdown';
import { Button } from 'components/molecules/button';
import { Textarea } from 'components/molecules/textarea/textarea';
import { useHomework } from 'hooks/use-homework';
import { Typography } from 'components/atoms/typography';
import { Loader } from 'components/molecules/loader';
import {
  HomeworkStatus,
  HomeworkStatusText,
  ProcessEnum,
} from 'utils/constants';
import { ErrorLocker } from '../error-locker';
import type { HomeworkProps } from './types';
import styles from './homework.module.scss';

export const Homework: FC<HomeworkProps> = ({ description }) => {
  /** лимит по количеству знаков в ответе */
  const textLengthLimit = 5000;

  const { homework, homeworkProcess, isLoading, homeworkError, handleAnswer } =
    useHomework();

  type HomeworkFormData = {
    homeworkAnswer: string;
  };

  const initialValues: HomeworkFormData = {
    homeworkAnswer: '',
  };

  const handleSubmit = async (
    values: HomeworkFormData,
    { validateForm, setSubmitting }: FormikHelpers<HomeworkFormData>
  ) => {
    await validateForm(values);
    await handleAnswer(values.homeworkAnswer);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      let errors = {};
      if (!values.homeworkAnswer) {
        errors = { ...errors, homeworkAnswer: 'Необходимо написать ответ' };
      }
      return errors;
    },
    onSubmit: handleSubmit,
  });

  const isAnswerChanged = formik.values.homeworkAnswer !== homework.text;
  const isEmptyAnswer = !formik.values.homeworkAnswer.length;

  useEffect(() => {
    void formik.setValues({ homeworkAnswer: homework.text });
  }, [homework.text]);

  return (
    <>
      {description && <Markdown>{description}</Markdown>}

      {isLoading && <Loader />}

      {homeworkError && <ErrorLocker />}

      {homeworkProcess === ProcessEnum.Succeeded && (
        <form
          name="homeworkDataForm"
          onSubmit={formik.handleSubmit}
          className={styles.form}
        >
          <Textarea
            name="homeworkAnswer"
            className={styles.answer}
            placeholder="Ответ на домашнее задание"
            rows={20}
            maxLength={textLengthLimit}
            value={formik.values.homeworkAnswer}
            error={formik.errors.homeworkAnswer}
            onChange={formik.handleChange}
            disabled={homework.status !== HomeworkStatus.Draft}
            displayLimit
          />
          <Button
            type="submit"
            className={styles.submitButton}
            text={isAnswerChanged ? 'Сохранить' : 'Отправить на проверку'}
            disabled={
              isEmptyAnswer ||
              homework.status !== HomeworkStatus.Draft ||
              formik.isSubmitting
            }
          />
        </form>
      )}

      {homework.status !== HomeworkStatus.Draft && (
        <Typography className={styles.status}>
          {HomeworkStatusText[homework.status]}
        </Typography>
      )}
    </>
  );
};
