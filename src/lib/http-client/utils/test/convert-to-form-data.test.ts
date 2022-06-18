import { MOCK_DATA, MOCK_FILE } from './constants';
import { convertToFormData } from '../convert-to-form-data';

describe('Функция convertToFormData корректно приводит к FormData', () => {
  it('Преобразованный объект является инстансом FormData и имеет все ключи', () => {
    const formData = convertToFormData(MOCK_DATA);
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.has('name')).toBe(true);
    expect(formData.has('description')).toBe(true);
    expect(formData.has('age')).toBe(true);
    expect(formData.has('parents')).toBe(true);
    expect(formData.has('image')).toBe(true);
  });

  it('Преобразованный объект с файлом является инстансом FormData и имеет ключ file', () => {
    const formData = convertToFormData({ file: MOCK_FILE });
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.has('file')).toBe(true);
  });

  it('Преобразованный пустой объект является инстансом FormData и не имеет ключа name', () => {
    const formData = convertToFormData({});
    expect(formData).toBeInstanceOf(FormData);
    expect(formData.has('name')).toBe(false);
  });
});
