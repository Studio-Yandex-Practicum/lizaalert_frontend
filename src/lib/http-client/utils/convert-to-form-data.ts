import { DataType } from '../http-client.types';

/** Преобразует объект с данными в formData */
export const convertToFormData = (data: DataType): FormData => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    const value = data[key];

    if (typeof value === 'string') {
      formData.set(key, value);
    }

    if (typeof value === 'object' && value?.constructor === File) {
      formData.set(key, value);
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      formData.set(key, value.toString());
    }

    if (Array.isArray(value)) {
      formData.set(key, JSON.stringify(value));
    }

    if (typeof value === 'object' && value?.constructor !== File) {
      formData.set(key, JSON.stringify(value));
    }
  }

  return formData;
};
