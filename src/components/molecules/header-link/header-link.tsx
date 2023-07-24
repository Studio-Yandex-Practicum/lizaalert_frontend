import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import styles from './header-link.module.scss';
import type { HeaderLinkProps } from './types';

/**
 * Компонент ссылки для навигации сайта, подсвечивает активный роут.
 * Всегда поставляется с иконкой, можно кастомизировать её тип.
 * */

export const HeaderLink: FC<HeaderLinkProps> = ({
  text,
  iconType,
  link,
  className,
}) => (
  <NavLink className={classnames(styles.link, className)} end to={link}>
    {({ isActive }) => (
      <TextWithIcon
        text={text}
        iconType={iconType}
        color={isActive ? 'color-hover' : 'dark-primary'}
        weight="medium"
        withOverflow
      />
    )}
  </NavLink>
);
