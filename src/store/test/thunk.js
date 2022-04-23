import { createAsyncThunk } from '@reduxjs/toolkit';

const initialTest = {
  id: 123456789,
  questions: [
    {
      id: 1,
      title:
        'В каких случаях перспективно применение следовых кинологических расчётов?',
      answers: [
        {
          id: 1,
          text: 'Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности',
          isCorrect: true,
          isChecked: false,
        },
        {
          id: 2,
          text: 'Обучение животного идти как по горячему, так и по остывшему следу',
          isCorrect: true,
          isChecked: false,
        },
        {
          id: 3,
          text: 'Поиск тел и их остатков с применением специально обученных собак',
          isCorrect: true,
          isChecked: false,
        },
      ],
    },
    {
      id: 2,
      title: 'С какого возраста следует начинать дрессировку по курсу ПСС?',
      answers: [
        {
          id: 1,
          text: '6 месяцев',
          isCorrect: false,
          isChecked: false,
        },
        {
          id: 2,
          text: '1–1,5 года',
          isCorrect: true,
          isChecked: false,
        },
        {
          id: 3,
          text: '3 года',
          isCorrect: false,
          isChecked: false,
        },
      ],
    },
  ],
};

const fetchTest = createAsyncThunk(
  'test/fetchTest',
  async (_, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function timeout() {
        // eslint-disable-next-line no-promise-executor-return
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }
      await timeout();
      return initialTest;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchTest;
