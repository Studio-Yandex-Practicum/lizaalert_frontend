import { ComponentMeta, ComponentStory } from '@storybook/react';
import { exportConfig } from 'stories/config';
import { utils } from 'stories/utils';
import TestResults from './test-results';
import type { TestResultsProps } from './types';

const mockStates = [
  {
    id: 1,
    text: 'Правильный ответ',
    isCorrect: true,
    isChecked: true,
  },
  {
    id: 2,
    text: 'Неправильный ответ',
    isCorrect: false,
    isChecked: true,
  },
  {
    id: 3,
    text: 'Правильный, но не выбранный ответ',
    isCorrect: true,
    isChecked: false,
  },
  {
    id: 4,
    text: 'Неправильный и не выбранный ответ',
    isCorrect: false,
    isChecked: false,
  },
];

export default {
  ...exportConfig,
  title: 'Molecules/TestResults',
  component: TestResults,
  argTypes: {
    answer: {
      defaultValue: {
        id: 1,
        text: 'Текст ответа',
        isCorrect: true,
        isChecked: true,
      },
    },
  },
} as ComponentMeta<typeof TestResults>;

const Template: ComponentStory<typeof TestResults> = (args) => (
  <TestResults {...args} />
);

export const Base = Template.bind({});

export const States: ComponentStory<typeof TestResults> = () => (
  <div className="flex flex-column">
    {mockStates.map((answer) => (
      <TestResults key={answer.id} answer={answer} />
    ))}
  </div>
);
States.argTypes = utils.disableControls<keyof TestResultsProps>('answer');
