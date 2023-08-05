export type ErrorLockerProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Текст сообщения над кнопкой */
  message: string;
  /** Текст кнопки */
  buttonText?: string;
  /** При true компонент приобретает вид карточки */
  isCard?: boolean;
  /** Функция-обработчик нажатия на кнопку (повторить запрос или сбросить состояние) */
  onClick: VoidFunction;
};
