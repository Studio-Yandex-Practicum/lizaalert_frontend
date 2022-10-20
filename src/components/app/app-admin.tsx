import RouterAdmin from 'router/router-admin';
import { withProviders } from './providers';

/**
 * Версия приложения с админкой.
 * */

function AppAdmin() {
  return <RouterAdmin />;
}

export default withProviders(AppAdmin);
