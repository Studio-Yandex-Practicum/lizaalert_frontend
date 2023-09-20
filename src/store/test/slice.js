import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { Controls, GENERAL_ERROR } from '../../utils/constants';
import { fetchTest } from './thunk';

const initialState = {
  test: {},
  isLoading: false,
  error: null,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    // TODO переименовать на понятный метод -- change... что именно?
    change: (state, action) => {
      state.test.questions = [
        // TODO Нечитаемый код переписать
        ...state.test.questions.map((question) => {
          if (question.id === action.payload.questionId) {
            return {
              ...question,
              answers: [
                ...question.answers.map((answer) => {
                  if (answer.id === action.payload.answerId) {
                    return { ...answer, isChecked: !answer.isChecked };
                  }

                  if (question.type === Controls.RADIO) {
                    return { ...answer, isChecked: false };
                  }

                  return answer;
                }),
              ],
            };
          }
          return question;
        }),
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
      state.test = {
        ...payload,
        questions: [
          ...payload.questions.map((question) => {
            let countCorrectAnswers = 0;
            JSON.parse(question.answers).forEach((answer) => {
              if (answer.isCorrect) countCorrectAnswers += 1;
            });

            if (countCorrectAnswers > 1) {
              return { ...question, type: Controls.CHECKBOX };
            }

            return { ...question, type: Controls.RADIO };
          }),
        ],
      };
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

export const { change } = testSlice.actions;

export default testSlice.reducer;
