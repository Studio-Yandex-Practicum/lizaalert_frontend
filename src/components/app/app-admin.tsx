import RouterAdmin from '../../router/router-admin';
import { withProviders } from './providers';

function AppAdmin() {
  return <RouterAdmin />;
}

export default withProviders(AppAdmin);
