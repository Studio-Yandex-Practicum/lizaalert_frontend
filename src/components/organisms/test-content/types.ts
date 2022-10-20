import { TestType } from 'components/organisms/test-preview';

export type TestContentProps = {
  /**
   * Объект теста с полями id, description, passingScore, retries, deadline, inProgress.
   * */
  test: TestType;
};
