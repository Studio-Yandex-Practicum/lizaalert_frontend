import defaultRoutes from '../router/routes';
import adminRoutes from '../router/routes-admin';

/** Получение env-переменной */
const getEnvVar = (key: string) => process.env[key] || '';

/** Режим запуска */
export const NODE_ENV = getEnvVar('NODE_ENV');

/** Режим админки */
export const isAdmin = !!getEnvVar('REACT_APP_IS_ADMIN');

/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';

/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';

/** Единая точка выхода для роутов проекта */
export const routes = isAdmin ? adminRoutes : defaultRoutes;

/** Урлы бекенда */
export const BACKEND_ORIGIN = 'http://51.250.35.214:8000';
export const BACKEND_API = `${BACKEND_ORIGIN}/api/v1`;
export const BACKEND_MEDIA = `${BACKEND_ORIGIN}/media`;
