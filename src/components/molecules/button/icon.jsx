import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Icon = function ({ id }) {
  switch (id) {
    case 'back': {
      return (
        <svg
          className={styles.backIcon}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.65685 15.0714L0.292892 8.7074C-0.0976315 8.31688 -0.0976315 7.68371 0.292892 7.29319L6.65685 0.929229C7.04738 0.538704 7.68054 0.538704 8.07107 0.929229C8.46159 1.31975 8.46159 1.95292 8.07107 2.34344L3.41421 7.0003L15 7.0003C15.5523 7.0003 16 7.44801 16 8.0003C16 8.55258 15.5523 9.0003 15 9.0003L3.41421 9.0003L8.07107 13.6572C8.46159 14.0477 8.46159 14.6808 8.07107 15.0714C7.68054 15.4619 7.04738 15.4619 6.65685 15.0714Z"
          />
        </svg>
      );
    }
    case 'forward': {
      return (
        <svg
          className={styles.forwardIcon}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.34315 15.0714L15.7071 8.7074C16.0976 8.31688 16.0976 7.68371 15.7071 7.29319L9.34315 0.929229C8.95262 0.538704 8.31946 0.538704 7.92893 0.929229C7.53841 1.31975 7.53841 1.95292 7.92893 2.34344L12.5858 7.0003L1 7.0003C0.447715 7.0003 0 7.44801 0 8.0003C0 8.55258 0.447715 9.0003 1 9.0003L12.5858 9.0003L7.92893 13.6572C7.53841 14.0477 7.53841 14.6808 7.92893 15.0714C8.31946 15.4619 8.95262 15.4619 9.34315 15.0714Z"
          />
        </svg>
      );
    }
    default:
      return <svg />;
  }
};

Icon.propTypes = {
  id: PropTypes.string,
};

Icon.defaultProps = {
  id: '',
};

export default Icon;
