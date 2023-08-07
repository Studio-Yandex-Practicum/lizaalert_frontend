import { registrationApi } from 'api/registration';
import type { FC } from 'react';
import { useState } from 'react';

const Register: FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Выполнить API запрос при отправке формы
    registrationApi
      .postRegistration(formData)
      .then((response) => {
        // Обработать успешный ответ
        console.log('Успешный ответ:', response);
      })
      .catch((error) => {
        // Обработать ошибку
        console.error('Ошибка:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="re_password"
        value={formData.re_password}
        onChange={handleChange}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
