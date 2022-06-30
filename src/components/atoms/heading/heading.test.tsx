import { getByText, render } from '@testing-library/react';
import Heading, { HeadingSizes } from './heading';
import styles from './heading.module.scss';

const testTitle = 'Заголовок';

function TestComponent() {
  return <a href="/">Тестовая ссылка</a>;
}

describe('Компонент Heading', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM', () => {
      const { container } = render(<Heading />);
      const headingElement = container.firstChild;
      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveClass(styles.heading);
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop "title" и рендерит переданный текст на страницу', () => {
      const { container } = render(<Heading title={testTitle} />);
      const titleElement = getByText(container, testTitle);
      expect(titleElement).toBeInTheDocument();
    });

    it('Принимает prop "children" как строку и рендерит переданный текст на страницу', () => {
      const { container } = render(<Heading>{testTitle}</Heading>);
      const titleElement = getByText(container, testTitle);
      expect(titleElement).toBeInTheDocument();
    });

    it('Принимает prop "children" как реакт ноду и рендерит её на страницу', () => {
      const { container } = render(
        <Heading>
          <TestComponent />
        </Heading>
      );

      const anchorElement = container.querySelector('a');
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement?.textContent).toBe('Тестовая ссылка');
    });

    it('Переданный prop "children" имеет приоритет перед "title"', () => {
      const { container } = render(
        <Heading title={testTitle}>Текст ребенка</Heading>
      );

      const headingElement = container.firstChild;
      expect(headingElement?.textContent).toBe('Текст ребенка');
      expect(headingElement?.textContent).not.toBe(testTitle);
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
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.heading);
      expect(headingElement).toHaveClass('test');
    });

    it('По умолчанию у компонента стоит класс "xl"', () => {
      const { container } = render(<Heading />);
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.xl);
    });

    it('Принимает prop "size=xxl" и ставит компоненту класс "xxl" вместо "xl"', () => {
      const { container } = render(<Heading size={HeadingSizes.XXL} />);
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.xxl);
      expect(headingElement).not.toHaveClass(styles.xl);
    });

    it('Принимает prop "size=xl" и ставит компоненту класс "xl"', () => {
      const { container } = render(<Heading size={HeadingSizes.XL} />);
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.xl);
    });

    it('Принимает prop "size=l" и ставит компоненту класс "l" вместо "xl"', () => {
      const { container } = render(<Heading size={HeadingSizes.L} />);
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.l);
      expect(headingElement).not.toHaveClass(styles.xl);
    });

    it('Принимает prop "size=m" и ставит компоненту класс "m" вместо "xl"', () => {
      const { container } = render(<Heading size={HeadingSizes.M} />);
      const headingElement = container.firstChild;
      expect(headingElement).toHaveClass(styles.m);
      expect(headingElement).not.toHaveClass(styles.xl);
    });
  });
});
