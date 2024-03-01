import { type FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'config';
import { useAppDispatch, useAppSelector } from 'store';
import { loginByOauth } from 'store/auth/thunk';
import { selectIsAuth } from 'store/auth/selectors';
import { extractOauthToken } from 'utils/extract-oauth-token';

const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authData = location.hash;
  const token = extractOauthToken(authData);

  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (token) {
      void dispatch(loginByOauth({ oauth_token: token }));
    }
  }, [token]);

  useEffect(() => {
    if (isAuth) {
      navigate(routes.courses.path);
    }
  }, [isAuth]);

  return <div />;
};

export default Auth;
