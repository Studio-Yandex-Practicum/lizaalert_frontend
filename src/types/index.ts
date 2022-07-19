import { IconType } from '../components/atoms/icon';

export type Nullable<T> = T | null | undefined;

export type RouteType = {
  title: string;
  path: string;
  icon: IconType;
  // TODO удалить children после интеграции, пока что это затычка для breadcrumbs
  children?: {
    path: string;
    mockTitle: string;
  }[];
};
