import { FormEvent } from 'react';
import classnames from 'classnames';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { Input } from '../../molecules/input';
import styles from './restore-password-form.module.scss';
import { RestorePasswordFormData } from './types';
import useFormWithValidation from '../../../hooks/use-form-with-validation';
import { Patterns } from '../../../utils/constants';

function RestorePasswordForm() {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation<RestorePasswordFormData>();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <Card className={styles.card} htmlTag="section">
      <Heading
        level={2}
        size="l"
        title="Восстановить пароль"
        className={styles.heading}
      />
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input
          labelName="Email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email}
          pattern={Patterns.email}
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
        iconPosition="back"
        iconName="arrowBack"
        className={classnames(styles.button, styles.backButton)}
        text="Назад"
      />
    </Card>
  );
}

export default RestorePasswordForm;
