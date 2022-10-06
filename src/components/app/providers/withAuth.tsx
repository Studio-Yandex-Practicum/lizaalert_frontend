import { useEffect, useState } from 'react';
import { Loader } from 'components/molecules/loader';
import { useAppDispatch } from 'store';
import { checkAuth } from 'store/auth/thunk';
import { ProviderComponent } from './types';

/* eslint react/function-component-definition: 0 */
export const withAuth = (Component: ProviderComponent) => () => {
  const dispatch = useAppDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    void dispatch(checkAuth()).finally(() => setIsCheckingAuth(false));
  }, []);

  if (isCheckingAuth) {
    return <Loader isFixed />;
  }

  return <Component />;
};
