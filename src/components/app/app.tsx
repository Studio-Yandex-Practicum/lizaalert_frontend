import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from '../../router/router';
import { selectIsLoading } from '../../store/auth/selectors';
import { checkAuth } from '../../store/auth/thunk';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector<unknown, boolean>(selectIsLoading);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    /// ...loader
  }
  return <Router />;
}

export default App;
