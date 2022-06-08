import Router from '../../router/router';
import RouterAdmin from '../../router/router-admin';
import { isAdmin } from '../../config';

function App() {
  return isAdmin ? <RouterAdmin /> : <Router />;
}

export default App;
