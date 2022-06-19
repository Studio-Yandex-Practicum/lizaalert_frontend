import { DataType } from '../http-client.types';

/** Преобразует объект с данными в formData */
export const convertToFormData = (data: DataType): FormData => {
  const formData = new FormData();

  const keys = Object.keys(data);
  const keysLength = keys.length;

  for (let i = 0; i < keysLength; i += 1) {
    const value = data[keys[i]];
    if (typeof value === 'string') {
      formData.set(keys[i], value);
    }

    if (typeof value === 'object' && value?.constructor === File) {
      formData.set(keys[i], value);
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      formData.set(keys[i], value.toString());
    }

    if (Array.isArray(value)) {
      formData.set(keys[i], JSON.stringify(value));
    }

    if (typeof value === 'object' && value?.constructor !== File) {
      formData.set(keys[i], JSON.stringify(value));
    }
  }

  return formData;
};
