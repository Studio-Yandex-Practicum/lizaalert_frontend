import { render } from '@testing-library/react';
import Icon, { IconProps } from './icon';
import styles from './icon.module.scss';

const createIcon = (props?: Omit<IconProps, 'type'>) =>
  render(<Icon type="arrowBack" {...props} />);

describe('Компонент Icon', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM и по внешний тег это "span"', () => {
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
    it('Принимает prop "type", которого нет в словаре и возвращает null', () => {
      const { container } = render(<Icon type="doesntExists" />);
      const iconElement = container.firstChild;
      expect(iconElement).not.toBeInTheDocument();
    });

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

    it('Если передан prop "onClick", но "type" отсутствует в словаре, то возвращает null', () => {
      const { container } = render(
        <Icon type="doesntExists" onClick={() => {}} />
      );
      const iconElement = container.firstChild;
      expect(iconElement).not.toBeInTheDocument();
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createIcon({ className: 'test' });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveClass('test');
    });

    it('Принимает prop "maxWidth" числом и ставит корневому элементу инлайновый стиль "max-width"', () => {
      const { container } = createIcon({ maxWidth: 20 });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('max-width: 20px');
    });

    it('Принимает prop "maxWidth" строкой и ставит корневому элементу инлайновый стиль "max-width"', () => {
      const { container } = createIcon({ maxWidth: '100px' });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('max-width: 100px');
    });

    it('Принимает prop "height" числом и ставит корневому элементу инлайновый стиль "height"', () => {
      const { container } = createIcon({ height: 20 });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('height: 20px');
    });

    it('Принимает prop "height" строкой и ставит корневому элементу инлайновый стиль "height"', () => {
      const { container } = createIcon({ height: '100px' });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('height: 100px');
    });

    it('Принимает prop "maxHeight" числом и ставит корневому элементу инлайновый стиль "max-height"', () => {
      const { container } = createIcon({ maxHeight: 20 });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('max-height: 20px');
    });

    it('Принимает prop "maxHeight" строкой и ставит корневому элементу инлайновый стиль "max-height"', () => {
      const { container } = createIcon({ maxHeight: '100px' });
      const iconElement = container.firstChild;
      expect(iconElement).toHaveClass(styles.icon);
      expect(iconElement).toHaveStyle('max-height: 100px');
    });
  });

  describe('Тестирование слушателей событий', () => {
    it('Клик по кнопке отрабатывает корректно', () => {
      const mockCallBack = jest.fn();
      const { container } = createIcon({
        onClick: mockCallBack,
      });
      const buttonElement = container.querySelector('button');
      buttonElement?.click();
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
