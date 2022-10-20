import { KeyboardEvent } from 'react';

export type OptionType = {
  /**
   * id опции.
   * */
  id: number;
  /**
   * Название опции.
   * */
  name: string;
};

export type OptionProps = {
  /**
   * Данные для опции, id - идентификатор, name - текст опции.
   * */
  option: OptionType;
  /**
   * Функция-обработчик клика, поднимает "наверх" объект опции.
   * */
  onClick: (option: OptionType) => void;
  /**
   * Функция-обработчик при нажатии на клавишу клавиатуры. Также поднимает "наверх" объект опции при нажатии на клавишу Enter.
   * */
  onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
