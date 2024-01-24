import type { ReactNode } from 'react';

export type AchievementProps = {
  /** ссылка на изображение ачивки */
  image?: string;
  /** Содержимое, которое будет открываться/закрываться, изначальное значение false */
  children: ReactNode;
  /** Функция-обработчик наведения мыши на ачивку */
  mouseEnterHandler: VoidFunction;
  /** Функция-обработчик события, когда курсор мыши перемещается за пределы ачивки */
  mouseLeaveHandler: VoidFunction;
  /** значение для открытия/закрытия tooltip */
  showToolTip: boolean;
};
