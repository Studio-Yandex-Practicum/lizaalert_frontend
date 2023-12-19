import type { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Input } from 'components/molecules/input';
import { useFormWithValidation } from 'hooks/use-form-with-validation';
import { RegExpPatterns, UserDataFieldNames } from 'utils/constants';
import styles from './restore-password-form.module.scss';
import type { RestorePasswordFormData } from './types';

/**
 * Компонент-карточка формы восстановления пароля.
 * Содержит поле ввода email, кнопку "Отправить новый пароль" и кнопку "Назад", которая ведет на предыдущий роут.
 * */

export const RestorePasswordForm: FC = () => {
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid } =
    useFormWithValidation<RestorePasswordFormData>();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <Card className={styles.card} htmlTag="section">
      <Heading level={2} weight="bold" size="l" text="Восстановить пароль" />

      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input
          labelName="Email"
          name={UserDataFieldNames.Email}
          value={values[UserDataFieldNames.Email] || ''}
          onChange={handleChange}
          error={errors[UserDataFieldNames.Email]}
          isValid={!errors[UserDataFieldNames.Email]}
          pattern={RegExpPatterns.email}
          type="email"
          placeholder="Ведите адрес электронной почты"
        />
        <Button
          view="primary"
          className={styles.button}
          disabled={!isValid}
          text="Отправить новый пароль"
        />
      </form>

      <Button
        view="secondary"
        iconName="arrowBack"
        className={classnames(styles.button, styles.backButton)}
        onClick={() => navigate(-1)}
        text="Назад"
      />
    </Card>
  );
};
