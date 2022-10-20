import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import styles from './header-link.module.scss';
import { HeaderLinkProps } from './types';

/**
 * Компонент ссылки для навигации сайта, подсвечивает активный роут.
 * Всегда поставляется с иконкой, можно кастомизировать её тип.
 * */

function HeaderLink({ text, iconType, link, className }: HeaderLinkProps) {
  return (
    <NavLink className={classnames(styles.link, className)} end to={link}>
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
