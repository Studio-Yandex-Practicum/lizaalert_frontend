import Button from './button';

export default function Example() {
  return (
    <div>
      <Button iconName="arrowForward" iconPosition="forward" minWidth={184}>
        Далее
      </Button>
      <Button
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        minWidth={184}
      >
        Назад
      </Button>
      <Button
        view="secondary"
        iconName="logout"
        iconPosition="back"
        minWidth={247}
      >
        Выйти из аккаунта
      </Button>
      <Button minWidth={246} disabled>
        Сохранить изменения
      </Button>
      <Button minWidth={360}>Записаться</Button>
    </div>
  );
}
