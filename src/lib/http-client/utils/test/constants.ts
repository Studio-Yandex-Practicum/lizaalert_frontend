export const MOCK_DATA = {
  name: 'Марк Аврелий',
  description:
    'Римский император из династии Антонинов, философ, представитель позднего стоицизма, последователь Эпиктета.',
  age: 58,
  image: null,
  parents: ['Марк Анний Вер', 'Домиция Луцилла'],
};

export const MOCK_FILE = new File([''], 'mockFile');

export const MOCK_URL = 'http://localhost/';
export const MOCK_SERVER_URL = 'https://jsonplaceholder.typicode.com';

export const MOCK_PARAMS = {
  name: 'Marcus Aurelius',
  age: 58,
  image: null,
  parents: ['Marcus Annius Verus', 'Domitia Calvilla'],
  life: {
    born: '121-04-26',
    died: '180-03-17',
  },
};

export const EXPECTED_PARAMS_URL =
  'http://localhost/?name=Marcus+Aurelius&age=58&parents=%5B%22Marcus+Annius+Verus%22%2C%22Domitia+Calvilla%22%5D&life=%7B%22born%22%3A%22121-04-26%22%2C%22died%22%3A%22180-03-17%22%7D';
