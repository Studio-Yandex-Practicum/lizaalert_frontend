import type { OptionType } from 'components/atoms/option';

export type SelectProps = {
  /**
   * Миксин для стилизации, присваивается элементу span или button. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
  /**
   * Имя селекта.
   * */
  name: string;
  /**
   * Имя лейбла. Лейбл расположен справа от селекта. При отсутствии значения селект растягивается на всю ширину.
   * */
  label?: string;
  /**
   * Плейсхолдер для селекта.
   * */
  placeholder?: string;
  /**
   * Массив объектов опции, id - идентификатор опции, name - текст опции.
   * */
  options: OptionType[];
  /**
   * Обработчик выбора опции.
   * */
  onSelect: (name: string, option: OptionType) => void;
  /**
   * Изначально выбранная опция.
   * */
  initialOption: OptionType;
};
