import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from '../../router/router';
import { selectIsAuth } from '../../store/auth/selectors';
import { checkAuth } from '../../store/auth/thunk';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [isAuth]);

  return <Router />;
}

export default App;
