import { render, screen } from '@testing-library/react';
import Heading from './heading';
import styles from './heading.module.scss';

const testTitle = 'Тестовый текст';

function TestComponent() {
  return <a href="/">{testTitle}</a>;
}

describe('Компонент Heading', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM', () => {
      const { container } = render(<Heading />);
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(styles.heading);
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop "title" и рендерит переданный текст на страницу', () => {
      render(<Heading title={testTitle} />);
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    it('Принимает prop "children" как строку и рендерит переданный текст на страницу', () => {
      render(<Heading>{testTitle}</Heading>);
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    it('Принимает prop "children" как реакт ноду и рендерит её на страницу', () => {
      render(
        <Heading>
          <TestComponent />
        </Heading>
      );
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    it('Переданный prop "children" имеет приоритет перед "title"', () => {
      render(<Heading title={testTitle}>Текст ребенка</Heading>);
      expect(screen.getByText('Текст ребенка')).toBeInTheDocument();
      expect(screen.queryByText(testTitle)).toBeNull();
    });

    it('По умолчанию у компонента второй уровень заголовка', () => {
      const { container } = render(<Heading />);
      const headingElement = container.querySelector('h2');
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toBeInTheDocument();
    });

    it('Принимает prop "level=3" и рендерит третий уровень заголовка', () => {
      const { container } = render(<Heading level={3} />);
      const headingElement = container.querySelector('h3');
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toBeInTheDocument();
    });

    it('Принимает prop "level=0" и рендерит второй уровень заголовка', () => {
      const { container } = render(<Heading level={0} />);
      const headingElement = container.querySelector('h2');
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toBeInTheDocument();
    });

    it('Принимает prop "level=7" и рендерит второй уровень заголовка', () => {
      const { container } = render(<Heading level={7} />);
      const headingElement = container.querySelector('h2');
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toBeInTheDocument();
    });

    it('Принимает prop "isSubheading" и при true рендерит тег абзаца', () => {
      const { container } = render(<Heading isSubheading />);
      const headingElement = container.querySelector('p');
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toBeInTheDocument();
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = render(<Heading className="test" />);
      expect(container.firstChild).toHaveClass('test');
    });

    it('По умолчанию у компонента стоит класс "xl"', () => {
      const { container } = render(<Heading />);
      expect(container.firstChild).toHaveClass(styles.xl);
    });

    it('Принимает prop "size=xl" и ставит компоненту класс "xl"', () => {
      const { container } = render(<Heading size="xl" />);
      expect(container.firstChild).toHaveClass(styles.xl);
    });

    it('Принимает prop "size=xxl" и ставит компоненту класс "xxl" вместо "xl"', () => {
      const { container } = render(<Heading size="xxl" />);
      expect(container.firstChild).toHaveClass(styles.xxl);
      expect(container.firstChild).not.toHaveClass(styles.xl);
    });

    it('Принимает prop "size=l" и ставит компоненту класс "l" вместо "xl"', () => {
      const { container } = render(<Heading size="l" />);
      expect(container.firstChild).toHaveClass(styles.l);
      expect(container.firstChild).not.toHaveClass(styles.xl);
    });

    it('Принимает prop "size=m" и ставит компоненту класс "m" вместо "xl"', () => {
      const { container } = render(<Heading size="m" />);
      expect(container.firstChild).toHaveClass(styles.m);
      expect(container.firstChild).not.toHaveClass(styles.xl);
    });
  });
});
