import { createSlice } from '@reduxjs/toolkit';
import fetchTest from './thunk';
import { Controls } from '../../utils/constants';

const initialState = {
  test: {},
  isLoading: false,
  error: null,
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    change: (state, action) => {
      state.test.questions = [
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
  extraReducers: {
    [fetchTest.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTest.fulfilled.type]: (state, { payload }) => {
      state.test = {
        ...payload,
        questions: [
          ...payload.questions.map((question) => {
            let countCorrectAnswers = 0;
            question.answers.forEach((answer) => {
              if (answer.isCorrect) countCorrectAnswers += 1;
            });
            if (countCorrectAnswers > 1) {
              return { ...question, type: Controls.CHECKBOX };
            }
            return { ...question, type: Controls.RADIO };
          }),
        ],
      };
      state.isLoading = false;
      state.error = null;
    },
    [fetchTest.rejected.type]: (state, { payload }) => {
      state.test = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { change } = testSlice.actions;

export default testSlice.reducer;
