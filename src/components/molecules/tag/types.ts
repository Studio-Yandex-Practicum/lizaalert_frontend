export type TagProps<T> = {
  /** Текст тега. Может быть числом (преобразуется в строку). */
  text: string | number;
  /** Функция-обработчик клика, "поднимает" наверх значение пропса value. */
  onClick?: (value: T) => void;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Значение тега, которое нужно поднять в родительский компонент при клике на кнопку закрытия. */
  value?: T;
};
