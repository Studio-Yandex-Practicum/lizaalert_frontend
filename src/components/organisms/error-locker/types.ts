export type ErrorLockerContentProps = {
  /** Заголовок ошибки */
  heading?: string;
  /** Подзаголовок-пояснение ошибки */
  subheading?: string;
  /** Текст-пояснение ошибки */
  content?: string;
  /** Текст кнопки */
  buttonText?: string;
  /** Функция-обработчик клика */
  onClick?: VoidFunction;
};

export type ErrorLockerProps = ErrorLockerContentProps & {
  /** При true оборачивает ошибку в стандартную карточку */
  isCard?: boolean;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
