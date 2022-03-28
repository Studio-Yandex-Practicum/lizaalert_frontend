import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Icon from '../../atoms/icon/icon';

import styles from './header-link.module.scss';

function HeaderLink({ text, isActive, link }) {
  const classNameLink = classNames(styles.link, {
    [styles.link_active]: isActive,
  });

  const classNameIcon = classNames(styles.link__icon, {
    [styles.link__icon_active]: isActive,
  });

  return (
    <NavLink className={classNameLink} to={link}>
      {text === 'Пользователи' && (
        <Icon type="users" className={classNameIcon} />
      )}
      {text === 'Библиотека' && (
        <Icon type="library" className={classNameIcon} />
      )}
      {text === 'Курсы' && <Icon type="course" className={classNameIcon} />}
      {text === 'Профиль' && (
        <Icon type="userCircle" className={classNameIcon} />
      )}
      <p className={styles.link__text}>{text}</p>
    </NavLink>
  );
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default HeaderLink;
