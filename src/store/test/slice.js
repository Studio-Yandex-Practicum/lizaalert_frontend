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
  answersOnValidate: [],
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
        // TODO Нечитаемый код переписать, isChecked больше не существует в answer
        ...state.test.questions.map((question) => {
          if (question.id === action.payload.questionId) {
            return {
              ...question,
              content: [
                ...question.content.map((answer) => {
                  if (answer.id === action.payload.answerId) {
                    return { ...answer, isChecked: !answer.isChecked };
                  }

                  if (question.question_type === Controls.RADIO) {
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
      state.answersOnValidate = state.test.questions.map((question) => ({
        question_id: question.id,
        answer_id: [
          ...question.content.map((answer) =>
            answer.isChecked ? answer.id : null
          ),
        ],
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, { payload }) => {
      state.test = {
        ...payload,
        questions: [
          ...payload.questions.map((question) => {
            let countCorrectAnswers = 0;
            // TODO: установить условие для значения countCorrectAnswers, isCorrect больше не существует в answer
            question.content.forEach(() => {
              countCorrectAnswers += 1;
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
