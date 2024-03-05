import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { Controls, ProcessEnum } from 'utils/constants';
import { calculatePercent } from 'utils/calculate-percent';
import { validateAnswers } from 'utils/validate-answers';
import { createTest, fetchTest, validateTest } from './thunk';
import type { TestState, UpdateAnswerAction } from './types';

const initialState: TestState = {
  test: {
    id: 0,
    title: '',
    description: '',
    status: '',
    passing_score: null,
    retries: null,
    deadline: null,
    in_progress: false,
    questions: [],
  },
  answersOnValidate: [],
  testResult: {},
  process: ProcessEnum.Initial,
  processValidationTest: ProcessEnum.Initial,
  processCreationTest: ProcessEnum.Initial,
  testResultPercent: null,
  error: null,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    updateAnswer: (state, action: UpdateAnswerAction) => {
      if (
        state.processCreationTest === ProcessEnum.Succeeded &&
        state.test.questions
      ) {
        state.test.questions = state.test.questions.map((question) => {
          if (question.id !== action.payload?.questionId) {
            return question;
          }

          return {
            ...question,
            content: question.content.map((answer) => {
              if (answer.id === action.payload?.answerId) {
                return {
                  ...answer,
                  selected: !answer.selected,
                };
              }

              if (question.question_type === Controls.RADIO) {
                return { ...answer, selected: false };
              }

              return answer;
            }),
          };
        });

        state.answersOnValidate = state.test.questions.map((question) => ({
          question_id: question.id,
          answer_id: question.content
            .filter((answer) => answer.selected)
            .map((answer) => answer.id),
        }));
      }
    },
    updateAnswerReset: (state) => {
      if (state.test.questions) {
        state.test.questions = state.test.questions.map((question) => ({
          ...question,
          content: question.content.map((answer) => ({
            ...answer,
            selected: false,
          })),
        }));
        state.answersOnValidate = [];
      }
    },
    resetTestResult: (state) => {
      state.testResult = initialState.testResult;
      state.testResultPercent = initialState.testResultPercent;
      state.error = initialState.error;
      state.processValidationTest = initialState.processValidationTest;
    },
    resetTest: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
      state.test = {
        ...payload,
        questions: payload.questions
          ? payload.questions.map((question) => {
              const countCorrectAnswers = question.content.length;
              if (countCorrectAnswers > 1) {
                return { ...question, type: Controls.CHECKBOX };
              }
              return { ...question, type: Controls.RADIO };
            })
          : [],
      };
    });

    builder.addCase(validateTest.pending, (state) => {
      state.processValidationTest = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addCase(validateTest.fulfilled, (state, { payload }) => {
      const correctAnswers = payload.result.map(
        ({ question_id, correct_answer_id }) => ({
          questionId: question_id,
          correctAnswers: correct_answer_id,
        })
      );
      const userAnswers = payload.answers.map(({ question_id, answer_id }) => ({
        questionId: question_id,
        answerId: answer_id,
      }));

      state.testResult = validateAnswers(correctAnswers, userAnswers);
      state.testResultPercent = calculatePercent(
        payload.answers.length,
        payload.score
      );
      state.processValidationTest = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addCase(validateTest.rejected, (state, { error }) => {
      state.processValidationTest = ProcessEnum.Failed;
      state.error = error;
    });

    builder.addCase(createTest.pending, (state) => {
      state.processCreationTest = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addCase(createTest.fulfilled, (state) => {
      state.processCreationTest = ProcessEnum.Succeeded;
      state.test.in_progress = true;
      state.error = null;
    });
    builder.addCase(createTest.rejected, (state, { error }) => {
      state.processCreationTest = ProcessEnum.Failed;
      state.error = error;
    });

    builder.addMatcher(isPending(fetchTest), (state) => {
      state.process = ProcessEnum.Requested;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchTest), (state) => {
      state.process = ProcessEnum.Succeeded;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchTest), (state, { error }) => {
      state.process = ProcessEnum.Failed;
      state.error = error;
    });
  },
});

export const { updateAnswer, updateAnswerReset, resetTestResult, resetTest } =
  testSlice.actions;

export default testSlice.reducer;
