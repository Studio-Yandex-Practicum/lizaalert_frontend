import { getByText, render } from '@testing-library/react';
import Card from './card';
import styles from './card.module.scss';

const testString = 'Тестовый компонент';

function TestComponent() {
  return <p>{testString}</p>;
}

describe('Компонент Card', () => {
  it('Рендерится в DOM вместе с ребенком', () => {
    const { container } = render(
      <Card>
        <TestComponent />
      </Card>
    );
    const cardEl = container.firstChild;
    expect(cardEl).toBeInTheDocument();
    expect(cardEl).toHaveClass(styles.card);

    const testEl = getByText(container, testString);
    expect(testEl).toBeInTheDocument();
  });

  it('Принимает prop htmlTag="article" и рендерит "article" вместо "div"', () => {
    const { container } = render(
      <Card htmlTag="article">
        <TestComponent />
      </Card>
    );
    const cardEl = container.querySelector('article');
    expect(cardEl).toHaveClass(styles.card);
    expect(cardEl).toBeInTheDocument();
  });

  it('Принимает prop htmlTag="aside" и рендерит "aside" вместо "div"', () => {
    const { container } = render(
      <Card htmlTag="aside">
        <TestComponent />
      </Card>
    );
    const cardEl = container.querySelector('aside');
    expect(cardEl).toHaveClass(styles.card);
    expect(cardEl).toBeInTheDocument();
  });

  it('Принимает prop htmlTag="li" и рендерит "li" вместо "div"', () => {
    const { container } = render(
      <Card htmlTag="li">
        <TestComponent />
      </Card>
    );
    const cardEl = container.querySelector('li');
    expect(cardEl).toHaveClass(styles.card);
    expect(cardEl).toBeInTheDocument();
  });

  it('По умолчанию у компонента нет класса "cardNoPadding"', () => {
    const { container } = render(
      <Card>
        <TestComponent />
      </Card>
    );
    const cardEl = container.firstChild;
    expect(cardEl).not.toHaveClass(styles.cardNoPadding);
  });

  it('Принимает prop "noPadding" и при true ставит компоненту класс "cardNoPadding"', () => {
    const { container } = render(
      <Card noPadding>
        <TestComponent />
      </Card>
    );
    const cardEl = container.firstChild;
    expect(cardEl).toHaveClass(styles.cardNoPadding);
  });

  it('Принимает prop "className" и ставит компоненту этот класс', () => {
    const { container } = render(
      <Card className="test">
        <TestComponent />
      </Card>
    );
    const cardEl = container.firstChild;
    expect(cardEl).toHaveClass('test');
  });
});
