import { defaultRoutes } from '../router/routes';
import { adminRoutes } from '../router/routes-admin';

/** Получение env-переменной */
const getEnvVar = (key: string) => process.env[key] || '';

export const REACT_APP_NODE_ENV = getEnvVar('REACT_APP_NODE_ENV');

/** Режим разработки */
export const isDevEnv = REACT_APP_NODE_ENV === 'development';

/** Режим продакшена */
export const isProdEnv = REACT_APP_NODE_ENV === 'production';

/** Режим мокинга данных */
export const isMockEnv = isDevEnv && getEnvVar('REACT_APP_MOCKING') === 'true';

/** Режим админки */
export const isAdmin = !!getEnvVar('REACT_APP_IS_ADMIN');

/** Единая точка выхода для роутов проекта */
export const routes = isAdmin ? adminRoutes : defaultRoutes;

/** Урлы бекенда */
export const BACKEND_ORIGIN = getEnvVar('BACKEND_ORIGIN');
export const BACKEND_API = `${BACKEND_ORIGIN}/api/v1`;

/** Урлы яндекса */
export const YANDEX_CLIENTID = getEnvVar('YANDEX_CLIENTID');
export const YANDEX_REDIRECT_URI = getEnvVar('YANDEX_REDIRECT_URI');
