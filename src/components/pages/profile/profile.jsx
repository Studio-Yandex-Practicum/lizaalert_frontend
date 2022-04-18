import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Heading } from '../../atoms';
import { AccountData, AccountOverview, PersonalData } from '../../organisms';
import routes from '../../../config/routes';
import styles from './profile.module.scss';
import fetchProfileAction from '../../../store/profile/thunk';
import profileMock from '../../../services/mock/profile.json';
import {
  selectProfileOverview,
  selectProfilePersonal,
  selectProfileAccount,
  selectProfileLoading,
} from '../../../store/profile/selectors';

function Profile() {
  const dispatch = useDispatch();
  const profileAccountOverview = useSelector(selectProfileOverview);
  const profilePersonalData = useSelector(selectProfilePersonal);
  const profileAccountData = useSelector(selectProfileAccount);
  const isLoading = useSelector(selectProfileLoading);

  useEffect(() => {
    dispatch(fetchProfileAction());
  }, [dispatch]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="container">
      <Heading
        level={2}
        size="xxl"
        title={routes.profile.title}
        className={styles.profileHeadline}
      />
      <div className={styles.content}>
        <aside className={styles.aside}>
          <AccountOverview
            avatar={profileAccountOverview.photo}
            userName={profileAccountOverview.name}
            userStatus={profileAccountOverview.status}
            userOccupation={profileAccountOverview.occupation}
            coursesFinished={profileAccountOverview.finishedCourses}
          />
        </aside>
        <main className={styles.main}>
          <section className={styles.section}>
            <PersonalData />
            <div className={styles.description}>
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
            <AccountData
              phoneNumber={profileAccountData.phoneNumber}
              email={profileAccountData.email}
              password={profileAccountData.password}
            />
            <div className={styles.description}>
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
