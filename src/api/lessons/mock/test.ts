const lessonQuiz = new Promise((resolve) => {
  resolve({
    id: 123456789,
    description: 'Какой вопрос?',
    status: '2',
    passing_score: 4,
    retries: 1,
    in_progress: true,
    deadline: '2023-09-18T17:56:07+03:00',
    questions: [
      {
        id: 1,
        title:
          'В каких случаях перспективно применение следовых кинологических расчётов?',
        question_type: 'checkbox',
        content: [
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
        title: "С какого возраста следует начинать 'дрессировку' по курсу ПСС?",
        question_type: 'checkbox',
        content: [
          { id: 1, text: '6 месяцев', isCorrect: false, isChecked: false },
          { id: 2, text: '1–1,5 года', isCorrect: true, isChecked: false },
          { id: 3, text: '3 года', isCorrect: false, isChecked: false },
        ],
      },
    ],
  });
});

export default lessonQuiz;
