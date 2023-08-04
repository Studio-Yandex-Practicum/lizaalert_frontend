import type { IconType } from 'components/atoms/icon';

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

export type AuthorizationProps = {
  requireAuth?: boolean;
};
