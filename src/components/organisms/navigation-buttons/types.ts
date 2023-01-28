export type NavigationButtonsProps = {
  /**
   * Текст во второй кнопке: 'main' - 'Далее', 'finish' - 'Завершить'.
   * */
  view?: 'main' | 'finish';
  /**
   * Флаг отключения кнопки 'Назад'.
   * */
  disabledBack?: boolean;
  /**
   * Флаг отключения кнопки 'Далее'.
   * */
  disabledForward?: boolean;
  /**
   * Миксин для стилизации внешнего контейнера. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  classNameForContainer?: string;
  /**
   * Миксин для стилизации кнопок. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  classNameForButtons?: string;
  /**
   * Функция-обработчик клика по кнопке 'Назад'.
   * */
  onClickBack: VoidFunction;
  /**
   * Функция-обработчик клика по кнопке 'Вперед'.
   * */
  onClickForward: VoidFunction;
};
