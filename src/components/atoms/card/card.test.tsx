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
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM вместе с ребенком', () => {
      const { container } = createCard();

      const cardElement = container.firstChild;
      expect(cardElement).toBeInTheDocument();
      expect(cardElement).toHaveClass(styles.card);

      const childElement = getByText(container, testString);
      expect(childElement).toBeInTheDocument();
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop htmlTag="article" и рендерит "article" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Article });
      const cardElement = container.querySelector('article');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="aside" и рендерит "aside" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Aside });
      const cardElement = container.querySelector('aside');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="li" и рендерит "li" вместо "div"', () => {
      const { container } = createCard({ htmlTag: CardHtmlTags.Li });
      const cardElement = container.querySelector('li');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('По умолчанию у компонента нет класса "cardNoPadding"', () => {
      const { container } = createCard();
      const cardElement = container.firstChild;
      expect(cardElement).not.toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "noPadding" и при true ставит компоненту класс "cardNoPadding"', () => {
      const { container } = createCard({ noPadding: true });
      const cardElement = container.firstChild;
      expect(cardElement).toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createCard({ className: 'test' });
      const cardElement = container.firstChild;
      expect(cardElement).toHaveClass('test');
    });
  });
});
