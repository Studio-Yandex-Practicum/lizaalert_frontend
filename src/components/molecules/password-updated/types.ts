export type PasswordUpdatedProps = {
  /**
   * Обработчик клика по кнопке.
   * */
  onButtonClick: (...args: unknown[]) => void;
  /**
   * Миксин для стилизации, присваивается элементу контейнера. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
