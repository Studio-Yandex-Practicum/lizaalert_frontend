import { TestResultModel } from '../types';

const testAnswers: TestResultModel = {
  id: 355,
  remaining_retries: '2',
  created_at: '2024-02-01T11:13:49.214247+03:00',
  updated_at: '2024-02-01T11:13:52.767096+03:00',
  deleted_at: '',
  answers: [
    { question_id: 1, answer_id: [1, 2, 3] },
    { question_id: 2, answer_id: [3] },
  ],
  result: [
    { question_id: 8, correct_answer_id: [1, 2, 3], is_correct: true },
    { question_id: 9, correct_answer_id: [3], is_correct: false },
  ],
  start_date: '2024-02-01T11:13:49.203366+03:00',
  end_date: '2024-02-01T11:13:52.759032+03:00',
  final_result: 'False',
  retry_count: 1,
  score: 1,
  user: 54,
  quiz: 5,
};

export default Promise.resolve(() => testAnswers);
