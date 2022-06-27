import { getByText, render } from '@testing-library/react';
import Card, { CardHtmlTags, CardProps } from './card';
import styles from './card.module.scss';

const testString = 'Тестовый компонент';

function TestComponent() {
  return <p>{testString}</p>;
}

const createCard = (props?: Omit<CardProps, 'children'>) =>
  render(
    <Card {...props}>
      <TestComponent />
    </Card>
  );

describe('Компонент Card', () => {
  it('Вставляется в DOM вместе с ребенком', () => {
    const { container } = createCard();

    const cardEl = container.firstChild;
    expect(cardEl).toBeInTheDocument();
    expect(cardEl).toHaveClass(styles.card);

    const testEl = getByText(container, testString);
    expect(testEl).toBeInTheDocument();
  });

  describe('Корректно принимает все пропсы', () => {
    it('Принимает prop htmlTag="article" и рендерит "article" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Article });
      const cardEl = container.querySelector('article');
      expect(cardEl).toHaveClass(styles.card);
      expect(cardEl).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="aside" и рендерит "aside" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Aside });
      const cardEl = container.querySelector('aside');
      expect(cardEl).toHaveClass(styles.card);
      expect(cardEl).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="li" и рендерит "li" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Li });
      const cardEl = container.querySelector('li');
      expect(cardEl).toHaveClass(styles.card);
      expect(cardEl).toBeInTheDocument();
    });

    it('По умолчанию у компонента нет класса "cardNoPadding"', () => {
      const { container } = createCard();
      const cardEl = container.firstChild;
      expect(cardEl).not.toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "noPadding" и при true ставит компоненту класс "cardNoPadding"', () => {
      const { container } = createCard({ noPadding: true });
      const cardEl = container.firstChild;
      expect(cardEl).toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createCard({ className: 'test' });
      const cardEl = container.firstChild;
      expect(cardEl).toHaveClass('test');
    });
  });
});
