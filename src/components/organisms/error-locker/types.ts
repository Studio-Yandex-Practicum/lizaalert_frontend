export type ErrorLockerProps = {
  /** Заголовок ошибки */
  heading: string;
  /** Подзаголовок-пояснение ошибки */
  subheading?: string;
  /** Текст кнопки */
  buttonText?: string;
  /** При true оборачивает ошибку в стандартную карточку */
  isCard?: boolean;
  /** Функция-обработчик клика */
  onClick: VoidFunction;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
