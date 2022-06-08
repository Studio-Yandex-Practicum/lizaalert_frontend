/**
 * Получение env-переменной
 */
const getEnvVar = (key) => process.env[key] || '';

/** Режим запуска */
export const NODE_ENV = getEnvVar('NODE_ENV');

/** Режим админки */
export const isAdmin = !!getEnvVar('REACT_APP_IS_ADMIN');

/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';

/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';
