import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from '../../router/router';
import { selectIsLoading } from '../../store/auth/selectors';
import { checkAuth } from '../../store/auth/thunk';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return <Router />;
}

export default App;
