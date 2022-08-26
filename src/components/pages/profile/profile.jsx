import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../atoms/heading';
import { AccountData } from '../../organisms/account-data';
import { AccountOverview } from '../../organisms/account-overview';
import { PersonalData } from '../../organisms/personal-data';
import styles from './profile.module.scss';
import { selectProfileLoading } from '../../../store/profile/selectors';
import fetchProfileAction from '../../../store/profile/thunk';
import { routes } from '../../../config';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction(0));
  }, [dispatch]);
  const isLoading = useSelector(selectProfileLoading);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <Heading
        level={2}
        size="xxl"
        title={routes.profile.title}
        className={styles.profileHeadline}
      />
      <div className={styles.content}>
        <aside className={styles.aside}>
          <AccountOverview />
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
                Географический регион влияет на&nbsp;доступность некоторых
                курсов и&nbsp;занятий
              </p>
              <p>
                Если вы&nbsp;не&nbsp;хотите, чтобы другие пользователи видели
                ваши ФИО, укажите позывной на&nbsp;форуме&nbsp;&mdash;
                он&nbsp;будет отображаться вместо ваших настоящих данных
              </p>
              <p>Требования к&nbsp;загружаемому фото:</p>
              <ul>
                <li>разрешение не&nbsp;менее 640&times;640px</li>
                <li>размер не&nbsp;более 3&nbsp;МБ</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <AccountData />
            <div className={styles.description}>
              <p>
                Номер телефона используется как уникальный идентификатор
                пользователя, поэтому его нельзя поменять вручную
              </p>
              <p>
                Если по&nbsp;какой-то причине у&nbsp;вас нет доступа
                к&nbsp;номеру телефона на&nbsp;который вы&nbsp;регистрировали
                аккаунт, напишите в&nbsp;поддержку
              </p>
              <p>Email нужен для восстановления пароля</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Profile;
