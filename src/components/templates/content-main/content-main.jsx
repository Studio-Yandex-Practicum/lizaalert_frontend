import PropTypes from 'prop-types';
import styles from './content-main.module.scss';

function ContentMain({ children }) {
  return <div className={styles.container}>{children}</div>;
}

ContentMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentMain;
