export type TooltipProps = {
  //  Данные, которые приходят с backend с ачивками:
  // ссылка на изображение
  src: string;
  // название ачивки
  title: string;
  // за что выдана ачивка
  issuedFor: string;
  // значение для открытия/закрытия tooltip
  showToolTip: boolean;
};
