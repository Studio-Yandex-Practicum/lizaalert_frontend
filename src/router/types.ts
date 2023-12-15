import type { IconType } from 'components/atoms/icon';

type RouteAdditions = {
  title: string;
  icon: IconType;
};

type RouteMain = {
  path: string;
};

type ChildrenRoute = Partial<RouteAdditions> & RouteMain;

export type RouteType = RouteMain &
  RouteAdditions & {
    children?: Record<string, ChildrenRoute>;
  };

export type AuthorizationProps = {
  requireAuth?: boolean;
};
