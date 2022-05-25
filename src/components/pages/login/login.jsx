import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../atoms';
import { LoginForm } from '../../templates';
import styles from './login.module.scss';
import { selectIsLoading } from '../../../store/user/selectors';
import {
  setIsSavedData,
  setRemoveData,
  setUser,
} from '../../../store/user/slice';
import fetchUser from '../../../store/user/thunk';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setRemoveData());
  }, []);

  const onLogin = (email, tel, password, isSavedData) => {
    // обновляем данные пользователя
    dispatch(
      setUser({
        email,
        tel,
        password,
      })
    );
    dispatch(setIsSavedData({ isSavedData }));
    // получаем данные зарегистрированного пользователя
    dispatch(fetchUser());
  };

  return (
    <>
      <Heading
        level={2}
        title="Авторизация"
        size="xxl"
        className={styles.heading}
      />
      <LoginForm onLogin={onLogin} isLoading={isLoading} />
    </>
  );
}

export default Login;
