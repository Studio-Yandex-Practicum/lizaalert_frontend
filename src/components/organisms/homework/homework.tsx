/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, type FC, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
// import classnames from 'classnames';
import { Markdown } from 'components/molecules/markdown';
import { useAppDispatch, useAppSelector } from 'store';
// import { fetchHomeworkByLessonId, updateHomework } from 'store/homework/thunk';
import { useEvent } from 'hooks/use-event';
// import { selectHomework } from 'store/homework/selectors';
import { Button } from 'components/molecules/button';
// import { saveAnswer } from 'store/homework/slice';
// import { HomeworkStatus } from 'api/homework/types';
import { Textarea } from 'components/molecules/textarea/textarea';
import { useHomework } from 'hooks/use-homework';
import type { HomeworkProps } from './types';
import styles from './homework.module.scss';

export const Homework: FC<HomeworkProps> = ({ description }) => {
  /** лимит по количеству знаков в ответе */
  const textLengthLimit = 5000;

  const dispatch = useAppDispatch();
  /*
  const { homework, currentText } = useAppSelector(selectHomework);
  const [text, setText] = useState<string>('');
  const isTextChanged = homework.text !== text;
  console.log(homework, text);

  const fetchHomework = useEvent(() => {
    void dispatch(fetchHomeworkByLessonId(1));
  });

  useEffect(() => {
    fetchHomework();

    return () => {
      dispatch(saveAnswer(text));
    };
  }, []);

    const handleSubmit = () => {
    void dispatch(updateHomework({ answer: { ...homework, text }, id: 1 }));
  };
*/
  const {
    currentAnswer,
    homework,
    homeworkProcess,
    isLoading,
    homeworkError,
    handleAnswer,
    buttonText,
  } = useHomework();

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
    console.log('submit');
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

  useEffect(() => {
    // setText(currentText);
    void formik.setValues({ homeworkAnswer: currentAnswer });
  }, [currentAnswer]);

  return (
    <>
      {description && <Markdown>{description}</Markdown>}
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
          displayLimit
        />
        <Button
          type="submit"
          className={styles.submitButton}
          text={buttonText}
          disabled={formik.isSubmitting}
        />

        {/* homework.status === HomeworkStatus.Draft && 'Работа на проверке' */}
      </form>
    </>
  );
};
