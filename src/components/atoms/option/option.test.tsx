import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Option from './option';
import styles from './option.module.scss';
import { OptionProps, OptionType } from './types';

const mockOption = {
  id: 1,
  name: 'option',
};

const createOption = (props?: Partial<OptionProps>) =>
  render(
    <Option
      option={mockOption}
      onClick={(option: OptionType) => option}
      onKeyDown={() => {}}
      {...props}
    />
  );

describe('Компонент Option', () => {
  describe('Тестирование рендера', () => {
    it('Вставляется в DOM', () => {
      const { container } = createOption();
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(styles.option);
    });
  });

  describe('Тестирование пропсов', () => {
    it('Принимает prop "option" и ставит этот текст в компонент', () => {
      createOption({ className: 'test' });
      expect(screen.getByText(mockOption.name)).toBeInTheDocument();
    });

    it('Принимает prop "className" и ставит компоненту этот класс', () => {
      const { container } = createOption({ className: 'test' });
      expect(container.firstChild).toHaveClass('test');
    });
  });

  describe('Тестирование слушателей событий', () => {
    it('Клик отрабатывает корректно', () => {
      const handleClick = jest.fn();
      createOption({
        onClick: handleClick,
      });
      userEvent.click(screen.getByText(mockOption.name));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // TODO написать тест на onKeyDown
  });
});
