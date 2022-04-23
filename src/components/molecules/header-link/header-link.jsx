import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TextWithIcon from '../text-with-icon/text-with-icon';
import styles from './header-link.module.scss';

function HeaderLink({ text, iconType, link }) {
  // eslint prevents using NavLink children mechanic
  /* eslint-disable react/no-children-prop */
  return (
    <NavLink
      className={styles.link}
      end
      to={link}
      children={({ isActive }) => {
        const color = isActive ? 'color-hover' : 'dark-primary';
        return <TextWithIcon text={text} iconType={iconType} color={color} />;
      }}
    />
  );
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HeaderLink;
