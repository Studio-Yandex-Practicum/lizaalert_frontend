import { lazy, Suspense } from 'react';
import { isAdmin } from '../../config';

// пилим бандлы
const Router = lazy(() => import('../../router/router'));
const RouterAdmin = lazy(() => import('../../router/router-admin'));

function App() {
  return (
    <Suspense fallback="Прогреваемся...">
      {isAdmin ? <RouterAdmin /> : <Router />}
    </Suspense>
  );
}

export default App;
