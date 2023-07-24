import { render, screen } from '@testing-library/react';
import { Typography } from './typography';
import styles from './typography.module.scss';

const testText = 'Тестовый текст';

function TestComponent() {
  return <a href="/">{testText}</a>;
}

describe('Компонент Typography', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM', () => {
      const { container } = render(<Typography />);
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(styles.typography);
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop "text" и рендерит переданный текст на страницу', () => {
      render(<Typography text={testText} />);
      expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it('Принимает prop "children" как строку и рендерит переданный текст на страницу', () => {
      render(<Typography>{testText}</Typography>);
      expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it('Принимает prop "children" как реакт ноду и рендерит её на страницу', () => {
      render(
        <Typography>
          <TestComponent />
        </Typography>
      );
      expect(screen.getByText(testText)).toBeInTheDocument();
    });

    it('Переданный prop "children" имеет приоритет перед "text"', () => {
      render(<Typography text={testText}>Текст ребенка</Typography>);
      expect(screen.getByText('Текст ребенка')).toBeInTheDocument();
      expect(screen.queryByText(testText)).toBeNull();
    });

    it('По умолчанию компонент рендерит абзац', () => {
      const { container } = render(<Typography />);
      const typographyElement = container.querySelector('p');
      expect(typographyElement).toHaveClass(styles.typography);
      expect(typographyElement).toBeInTheDocument();
    });

    it('Принимает prop "htmlTag=h3" и рендерит заголовок третьего уровня', () => {
      const { container } = render(<Typography htmlTag="h3" />);
      const typographyElement = container.querySelector('h3');
      expect(typographyElement).toHaveClass(styles.typography);
      expect(typographyElement).toBeInTheDocument();
    });

    it('Принимает prop "htmlTag=h3" и рендерит элемент span', () => {
      const { container } = render(<Typography htmlTag="span" />);
      const typographyElement = container.querySelector('span');
      expect(typographyElement).toHaveClass(styles.typography);
      expect(typographyElement).toBeInTheDocument();
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = render(<Typography className="test" />);
      expect(container.firstChild).toHaveClass('test');
    });

    it('По умолчанию у компонента стоит класс "m"', () => {
      const { container } = render(<Typography />);
      expect(container.firstChild).toHaveClass(styles.m);
    });

    it('Принимает prop "size=l" и ставит компоненту класс "l" вместо "m"', () => {
      const { container } = render(<Typography size="l" />);
      expect(container.firstChild).toHaveClass(styles.l);
      expect(container.firstChild).not.toHaveClass(styles.m);
    });

    it('Принимает prop "size=m" и ставит компоненту класс "s" вместо "m"', () => {
      const { container } = render(<Typography size="s" />);
      expect(container.firstChild).toHaveClass(styles.s);
      expect(container.firstChild).not.toHaveClass(styles.m);
    });

    it('Принимает prop "size=xl" и ставит компоненту класс "xl" вместо "m"', () => {
      const { container } = render(<Typography size="xl" />);
      expect(container.firstChild).toHaveClass(styles.xl);
      expect(container.firstChild).not.toHaveClass(styles.m);
    });

    it('Принимает prop "size=xxl" и ставит компоненту класс "xxl" вместо "m"', () => {
      const { container } = render(<Typography size="xxl" />);
      expect(container.firstChild).toHaveClass(styles.xxl);
      expect(container.firstChild).not.toHaveClass(styles.m);
    });

    it('По умолчанию у компонента стоит класс "normal"', () => {
      const { container } = render(<Typography />);
      expect(container.firstChild).toHaveClass(styles.normal);
    });

    it('Принимает prop "weight=medium" и ставит компоненту класс "medium" вместо "normal"', () => {
      const { container } = render(<Typography weight="medium" />);
      expect(container.firstChild).toHaveClass(styles.medium);
      expect(container.firstChild).not.toHaveClass(styles.normal);
    });

    it('Принимает prop "weight=bold" и ставит компоненту класс "bold" вместо "normal"', () => {
      const { container } = render(<Typography weight="bold" />);
      expect(container.firstChild).toHaveClass(styles.bold);
      expect(container.firstChild).not.toHaveClass(styles.normal);
    });
  });
});
