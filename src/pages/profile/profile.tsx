import { useEffect } from 'react';
import { LOADING_PROCESS_MAP } from 'utils/constants';
import { Heading, Li, P } from '../../components/atoms/typography';
import { Loader } from '../../components/molecules/loader';
import { AccountData } from '../../components/organisms/account-data';
import { AccountOverview } from '../../components/organisms/account-overview';
import { PersonalData } from '../../components/organisms/personal-data';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectIsProfileLoading } from '../../store/profile/selectors';
import { fetchProfile } from '../../store/profile/thunk';
import { routes } from '../../config';
import styles from './profile.module.scss';

const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfile());
  }, [dispatch]);

  const profileProcess = useAppSelector(selectIsProfileLoading);
  const isLoading = LOADING_PROCESS_MAP[profileProcess];

  if (isLoading) {
    return <Loader isAbsolute />;
  }

  return (
    <>
      <Heading
        level={2}
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
              <P>
                Просьба указывать настоящие ФИО, это нужно для получения
                сертификатов
              </P>
              <P>
                Географический регион влияет на&nbsp;доступность некоторых
                курсов и&nbsp;занятий
              </P>
              <P>
                Если вы&nbsp;не&nbsp;хотите, чтобы другие пользователи видели
                ваши ФИО, укажите позывной на&nbsp;форуме&nbsp;&mdash;
                он&nbsp;будет отображаться вместо ваших настоящих данных
              </P>
              <P>Требования к&nbsp;загружаемому фото:</P>

              <ul className={styles.list}>
                <Li>разрешение не&nbsp;менее 640&times;640px</Li>
                <Li>размер не&nbsp;более 3&nbsp;МБ</Li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <AccountData />

            <div className={styles.description}>
              <P>
                Email используется как уникальный идентификатор пользователя,
                поэтому его нельзя поменять вручную
              </P>
              <P>
                Если по&nbsp;какой-то причине у&nbsp;вас нет доступа к&nbsp;
                Email, на&nbsp;который вы&nbsp;регистрировали аккаунт, напишите
                в&nbsp;поддержку
              </P>
              <P>Номер телефона нужен для восстановления пароля</P>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
