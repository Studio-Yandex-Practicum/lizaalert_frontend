import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '../../components/atoms/typography';
import { AccountData } from '../../components/organisms/account-data';
import { AccountOverview } from '../../components/organisms/account-overview';
import { PersonalData } from '../../components/organisms/personal-data';
import styles from './profile.module.scss';
import { selectProfileLoading } from '../../store/profile/selectors';
import fetchProfileAction from '../../store/profile/thunk';
import { routes } from '../../config';

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
      <Typography
        htmlTag="h2"
        size="xxl"
        weight="bold"
        text={routes.profile.title}
        className={styles.profileHeadline}
      />

      <div className={styles.content}>
        <aside className={styles.aside}>
          <AccountOverview />
        </aside>

        <div className={styles.main}>
          <section className={styles.section}>
            <PersonalData />

            <div className={styles.description}>
              <Typography>
                Просьба указывать настоящие ФИО, это нужно для получения
                сертификатов
              </Typography>
              <Typography>
                Географический регион влияет на&nbsp;доступность некоторых
                курсов и&nbsp;занятий
              </Typography>
              <Typography>
                Если вы&nbsp;не&nbsp;хотите, чтобы другие пользователи видели
                ваши ФИО, укажите позывной на&nbsp;форуме&nbsp;&mdash;
                он&nbsp;будет отображаться вместо ваших настоящих данных
              </Typography>
              <Typography>Требования к&nbsp;загружаемому фото:</Typography>

              <ul className={styles.list}>
                <Typography htmlTag="li">
                  разрешение не&nbsp;менее 640&times;640px
                </Typography>
                <Typography htmlTag="li">
                  размер не&nbsp;более 3&nbsp;МБ
                </Typography>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <AccountData />

            <div className={styles.description}>
              <Typography>
                Номер телефона используется как уникальный идентификатор
                пользователя, поэтому его нельзя поменять вручную
              </Typography>
              <Typography>
                Если по&nbsp;какой-то причине у&nbsp;вас нет доступа
                к&nbsp;номеру телефона на&nbsp;который вы&nbsp;регистрировали
                аккаунт, напишите в&nbsp;поддержку
              </Typography>
              <Typography>Email нужен для восстановления пароля</Typography>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Profile;
