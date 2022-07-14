import { render, screen } from '@testing-library/react';
import Card, { CardProps } from './card';
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
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(styles.card);
      expect(screen.getByText(testString)).toBeInTheDocument();
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop htmlTag="article" и рендерит "article" вместо "div"', () => {
      const { container } = createCard({ htmlTag: 'article' });
      const cardElement = container.querySelector('article');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="aside" и рендерит "aside" вместо "div"', () => {
      const { container } = createCard({ htmlTag: 'aside' });
      const cardElement = container.querySelector('aside');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="li" и рендерит "li" вместо "div"', () => {
      const { container } = createCard({ htmlTag: 'li' });
      const cardElement = container.querySelector('li');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('Принимает prop htmlTag="section" и рендерит "section" вместо "div"', () => {
      const { container } = createCard({ htmlTag: 'section' });
      const cardElement = container.querySelector('section');
      expect(cardElement).toHaveClass(styles.card);
      expect(cardElement).toBeInTheDocument();
    });

    it('По умолчанию у компонента нет класса "cardNoPadding"', () => {
      const { container } = createCard();
      expect(container.firstChild).not.toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "noPadding" и при true ставит компоненту класс "cardNoPadding"', () => {
      const { container } = createCard({ noPadding: true });
      expect(container.firstChild).toHaveClass(styles.cardNoPadding);
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createCard({ className: 'test' });
      expect(container.firstChild).toHaveClass('test');
    });
  });
});
