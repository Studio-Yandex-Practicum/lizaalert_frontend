import defaultRoutes from '../router/routes';
import adminRoutes from '../router/routes-admin';

/** Получение env-переменной */
const getEnvVar = (key: string) => process.env[key] || '';

export const NODE_ENV = getEnvVar('NODE_ENV');

/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';

/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';

/** Режим мокинга данных */
export const isMockEnv = isDevEnv && !!getEnvVar('REACT_APP_MOCKING');

/** Режим админки */
export const isAdmin = !!getEnvVar('REACT_APP_IS_ADMIN');

/** Единая точка выхода для роутов проекта */
export const routes = isAdmin ? adminRoutes : defaultRoutes;

/** Урлы бекенда */
export const BACKEND_ORIGIN = getEnvVar('BACKEND_ORIGIN');
export const BACKEND_API = `${BACKEND_ORIGIN}/api/v1`;
