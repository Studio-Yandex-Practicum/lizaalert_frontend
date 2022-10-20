export type PreviewWebinarProps = {
  /**
   * Дата вебинара в формате YYYY-MM-DDTHH:mm:ss.
   * */
  date: string;
  /**
   * Внешняя ссылка на вебинар.
   * */
  link: string;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
