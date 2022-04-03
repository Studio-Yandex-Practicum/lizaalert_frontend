import AccountData from '../../organisms/account-data/account-data';
import AccountOverview from '../../organisms/account-overview/account-overview';
import PersonalData from '../../organisms/personal-data/personal-data';
import routes from '../../../config/routes';
import styles from './profile.module.scss';

function Profile() {
  return (
    <div className="container">
      <h1 className={`heading heading.h1 ${styles.profileHeadline}`}>
        {routes.profile.title}
      </h1>
      <div className={styles.content}>
        <aside>
          <AccountOverview />
        </aside>
        <main className={styles.main}>
          <section className={styles.section}>
            <PersonalData />
            <div className={styles.descriprion}>
              <p>
                Просьба указывать настоящие ФИО, это нужно для получения
                сертификатов
              </p>
              <p>
                Географический регион влияет на доступность некоторых курсов и
                занятий
              </p>
              <p>
                Если вы не хотите, чтобы другие пользователи видели ваши ФИО,
                укажите позывной на форуме — он будет отображаться вместо ваших
                настоящих данных
              </p>
              <p>Требования к загружаемому фото:</p>
              <ul>
                <li>разрешение не менее 640x640px</li>
                <li>размер не более 3 МБ</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <AccountData />
            <div className={styles.descriprion}>
              <p>
                Номер телефона используется как уникальный идентификатор
                пользователя, поэтому его нельзя поменять вручную
              </p>
              <p>
                Если по какой-то причине у вас нет доступа к номеру телефона на
                который вы регистрировали аккаунт, напишите в поддержку
              </p>
              <p>Email нужен для восстановления пароля</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Profile;
