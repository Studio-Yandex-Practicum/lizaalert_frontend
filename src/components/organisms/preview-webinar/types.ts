export type PreviewWebinarProps = {
  /**
   * Дата вебинара в формате YYYY-MM-DDTHH:mm:ss.
   * */
  date: string;
  /**
   * URL внешней ссылки на вебинар (открывается в новом окне).
   * */
  link: string;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
