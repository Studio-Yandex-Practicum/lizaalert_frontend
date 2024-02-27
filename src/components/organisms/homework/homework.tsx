import { type FC, useEffect } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Typography } from 'components/atoms/typography';
import { Markdown } from 'components/molecules/markdown';
import { Button } from 'components/molecules/button';
import { Textarea } from 'components/molecules/textarea/textarea';
import { Loader } from 'components/molecules/loader';
import {
  HomeworkStatus,
  HomeworkStatusText,
  ProcessEnum,
} from 'utils/constants';
import { useHomework } from 'hooks/use-homework';
import { ErrorLocker } from '../error-locker';
import type { HomeworkFormData, HomeworkProps } from './types';
import styles from './homework.module.scss';

const textLengthLimit = 5000;
const initialValues: HomeworkFormData = {
  homeworkAnswer: '',
};

export const Homework: FC<HomeworkProps> = ({ description }) => {
  const { homework, homeworkProcess, isLoading, homeworkError, handleAnswer } =
    useHomework();

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
  const isDraft = homework.status === HomeworkStatus.Draft;

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
            placeholder="Ответ на домашнее задание"
            rows={15}
            maxLength={textLengthLimit}
            value={formik.values.homeworkAnswer}
            error={formik.errors.homeworkAnswer}
            onChange={formik.handleChange}
            isValid={!isAnswerChanged || !formik.errors.homeworkAnswer}
            disabled={!isDraft}
            displayLimit
          />
          <Button
            type="submit"
            className={styles.submitButton}
            text={isAnswerChanged ? 'Сохранить' : 'Отправить на проверку'}
            disabled={isEmptyAnswer || !isDraft || formik.isSubmitting}
          />
        </form>
      )}

      {!isDraft && (
        <Typography className={styles.status}>
          {HomeworkStatusText[homework.status]}
        </Typography>
      )}
    </>
  );
};
