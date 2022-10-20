import Router from 'router/router';
import { withProviders } from './providers';

/**
 * Основная базовая версия приложения для студента.
 * */

function App() {
  return <Router />;
}

export default withProviders(App);
