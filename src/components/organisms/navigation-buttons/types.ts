export type NavigationButtonsProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Текст во второй кнопке: 'default' - 'Далее', 'finish' - 'Завершить'. */
  view?: 'default' | 'finish';
  /** Флаг отключения кнопки 'Назад'. */
  isDisabledPrev?: boolean;
  /** Флаг отключения кнопки 'Далее'. */
  isDisabledNext?: boolean;
  /** Функция-обработчик клика по кнопке 'Назад'. */
  onClickPrev: VoidFunction;
  /** Функция-обработчик клика по кнопке 'Вперед'. */
  onClickNext: VoidFunction;
};
