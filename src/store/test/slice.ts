import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { Controls, GENERAL_ERROR } from '../../utils/constants';
import { fetchTest, validateTest } from './thunk';
import { TestState } from './types';

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
  testResult: null,
  isLoading: false,
  error: null,
};

interface UpdateAnswerAction {
  type: string;
  payload: {
    questionId: number;
    answerId: number;
  };
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    updateAnswer: (state, action: UpdateAnswerAction) => {
      if (state.test && state.test.questions) {
        state.test.questions = state.test.questions.map((question) => {
          if (question.id === action.payload?.questionId) {
            return {
              ...question,
              content: question.content.map((answer) => {
                if (answer.id === action.payload?.answerId) {
                  return { ...answer, selected: !answer.selected };
                }

                if (question.question_type === Controls.RADIO) {
                  return { ...answer, selected: false };
                }

                return answer;
              }),
            };
          }

          return question;
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
      if (state.test && state.test.questions) {
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
    builder.addCase(validateTest.fulfilled, (state, { payload }) => {
      state.testResult = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(validateTest.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(validateTest.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
    builder.addMatcher(isPending(fetchTest), (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addMatcher(isFulfilled(fetchTest), (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isRejected(fetchTest), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message ?? GENERAL_ERROR;
    });
  },
});

export const { updateAnswer, updateAnswerReset } = testSlice.actions;

export default testSlice.reducer;
