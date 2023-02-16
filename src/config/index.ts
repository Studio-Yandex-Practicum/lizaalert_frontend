import defaultRoutes from '../router/routes';
import adminRoutes from '../router/routes-admin';

/** Получение env-переменной */
const getEnvVar = (key: string) => process.env[key] || '';

export const NODE_ENV = getEnvVar('NODE_ENV');

/** Режим админки */
export const isAdmin = !!getEnvVar('REACT_APP_IS_ADMIN');

/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';

/** Режим мокинга данных */
export const isMockEnv = isDevEnv && !!getEnvVar('REACT_APP_MOCKING');

/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';

/** Единая точка выхода для роутов проекта */
export const routes = isAdmin ? adminRoutes : defaultRoutes;
console.log({ routes });

const BACKEND_ORIGIN_ENV: Record<string, string> = {
  development: 'DEV',
  production: 'PROD',
};

/** Урлы бекенда */
export const BACKEND_ORIGIN = getEnvVar(
  `REACT_APP_BACKEND_ORIGIN_${BACKEND_ORIGIN_ENV[NODE_ENV]}`
);
export const BACKEND_API = `${BACKEND_ORIGIN}/api/v1`;
