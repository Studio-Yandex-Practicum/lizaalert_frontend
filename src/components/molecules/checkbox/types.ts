export type CheckboxProps = {
  /**
   * Атрибут-имя инпута
   * */
  name: string;
  /**
   * Флаг, является ли компонент радио-инпутом
   * */
  isRadio?: boolean;
  /**
   * Текст лейбла, всегда расположен справа от чекбокса
   * */
  labelText?: string;
  /**
   * css-класс миксин
   * */
  className?: string;
};
