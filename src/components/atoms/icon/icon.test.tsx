import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Icon from './icon';
import styles from './icon.module.scss';
import { IconProps } from './types';

const createIcon = (props?: Omit<IconProps, 'type'>) =>
  render(<Icon type="arrowBack" {...props} />);

describe('Компонент Icon', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM и внешний тег это "span"', () => {
      const { container } = createIcon();
      const spanElement = container.querySelector('span');
      expect(spanElement).toBeInTheDocument();
      expect(spanElement).toHaveClass(styles.icon);
    });

    it('Имеет корректный набор атрибутов для svg-элемента', () => {
      const { container } = createIcon();
      const spanElement = container.querySelector('span');
      const svgElement = spanElement?.querySelector('svg');

      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveStyle(
        'max-width: inherit; max-height: inherit; height: inherit;'
      );
      expect(svgElement).toHaveAttribute('fill', 'currentColor');
      expect(svgElement).toHaveAttribute(
        'preserveAspectRatio',
        'xMidYMid meet'
      );
      expect(svgElement).toHaveAttribute('width', '100%');
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop "onClick" и возвращает "button", а не "span"', () => {
      const { container } = createIcon({
        onClick: () => {},
      });
      const buttonElement = container.querySelector('button');
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass(styles.icon);

      const svgElement = buttonElement?.querySelector('svg');
      expect(svgElement).toBeInTheDocument();

      const spanElement = container.querySelector('span');
      expect(spanElement).not.toBeInTheDocument();
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createIcon({ className: 'test' });
      expect(container.firstChild).toHaveClass('test');
    });
  });

  describe('Тестирование слушателей событий', () => {
    it('Клик по кнопке отрабатывает корректно', () => {
      const handleClick = jest.fn();
      createIcon({
        onClick: handleClick,
      });
      userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
