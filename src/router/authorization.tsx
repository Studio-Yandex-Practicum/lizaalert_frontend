import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectIsAuth } from 'store/auth/selectors';
import { routes } from 'config';
import type { AuthorizationProps } from './types';

export const Authorization: FC<AuthorizationProps> = ({ requireAuth }) => {
  const isAuth = useAppSelector<boolean>(selectIsAuth);
  if (!requireAuth && isAuth) {
    return <Navigate to={routes.courses.path} />;
  }

  if (requireAuth && !isAuth) {
    return <Navigate to={routes.login.path} />;
  }

  return <Outlet />;
};
