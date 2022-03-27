import React from 'react';
import PropTypes from 'prop-types';

import styles from './header-link.module.scss';

import IconUser from '../../atoms/icon-user';
import IconLibrary from '../../atoms/icon-library';
import IconCourses from '../../atoms/icon-courses';
import IconProfile from '../../atoms/icon-profile';

function HeaderLink({ text, isActive, link }) {
  const classNameLink = `${styles.link} ${
    isActive ? `${styles.link_active}` : ''
  }`;

  const classNameIcon = `${styles.link__icon} ${
    isActive ? `${styles.link__icon_active}` : ''
  }`;

  return (
    <a className={classNameLink} href={link}>
      {text === 'Пользователи' && <IconUser className={classNameIcon} />}
      {text === 'Библиотека' && <IconLibrary className={classNameIcon} />}
      {text === 'Курсы' && <IconCourses className={classNameIcon} />}
      {text === 'Профиль' && <IconProfile className={classNameIcon} />}
      <p className={styles.link__text}>{text}</p>
    </a>
  );
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default HeaderLink;
