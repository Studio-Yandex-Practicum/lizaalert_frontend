import { OauthTokenData } from 'api/authorization';
import { AuthorizationModel } from 'api/authorization/types';
import { routes } from 'config';
import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { loginByOauth } from 'store/auth/thunk';
import { extractOauthToken } from 'utils/extract-oauth-token';

const Auth: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authData = location.hash;
  const token = extractOauthToken(authData);

  const getJwt = async (
    oauth_token: OauthTokenData
  ): Promise<AuthorizationModel> => {
    try {
      const result = await dispatch(loginByOauth(oauth_token));
      const tokens = await result.payload;
      return tokens as AuthorizationModel;
    } catch {
      throw new Error();
    }
  };

  useEffect(() => {
    getJwt({ oauth_token: token })
      .then((res) => {
        if (res.access && res.access) {
          navigate(routes.courses.path);
        }
      })
      .catch(() => {
        throw new Error();
      });
  });

  return <div />;
};

export default Auth;
