import './styles/index.scss';
import image from './assets/images/course-placeholder.jpg';
import svg from './assets/icons/arrow-back.svg';

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));

const getEnvVar = (key) => process.env[key];

export const NODE_ENV = getEnvVar('NODE_ENV');
export const BACKEND_ORIGIN = getEnvVar('BACKEND_ORIGIN');
console.log(process.env, image, svg);
