export type Nullable<T> = T | null | undefined;

export type RouteType = {
  title: string;
  path: string;
  icon: string;
  // TODO удалить children после интеграции, пока что это затычка для breadcrumbs
  children?: {
    path: string;
    mockTitle: string;
  }[];
};
