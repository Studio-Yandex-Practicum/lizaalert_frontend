import { NavLink } from 'react-router-dom';
import { TextWithIcon } from '../text-with-icon';
import styles from './header-link.module.scss';
import { HeaderLinkProps } from './types';

/**
 * @description Компонент ссылки для навигации сайта, подсвечивает активный роут.
 *
 * @props
 * - text - string - текст ссылки.
 * - iconType - string - тип иконки из объекта `icons`.
 * - link - string - `href` для ссылки.
 * */

function HeaderLink({ text, iconType, link }: HeaderLinkProps) {
  return (
    <NavLink className={styles.link} end to={link}>
      {({ isActive }) => (
        <TextWithIcon
          text={text}
          iconType={iconType}
          color={isActive ? 'color-hover' : 'dark-primary'}
        />
      )}
    </NavLink>
  );
}

export default HeaderLink;
