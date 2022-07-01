import { NavLink } from 'react-router-dom';
import { IconType } from '../../atoms';
import TextWithIcon from '../text-with-icon/text-with-icon';
import styles from './header-link.module.scss';

export type HeaderLinkProps = {
  text: string;
  iconType: IconType;
  link: string;
};

/**
 * @description Компонент навигационной ссылки для навигации сайта, подсвечивает активный роут
 *
 * @props
 * - text - string - текст ссылки
 * - iconType - string - тип иконки из объекта `icons`
 * - link - string - `href` для ссылки
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
