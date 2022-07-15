export type TestType = {
  id: number;
  description: string;
  passingScore: number;
  retries: number;
  deadline: string;
  inProgress: boolean;
};

export type TextPreviewProps = {
  test: TestType;
  toggleRender: (...args: unknown[]) => void;
};
