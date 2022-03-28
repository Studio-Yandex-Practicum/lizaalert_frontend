import PropTypes from 'prop-types';
import styles from './profile-meta.module.scss';

function ProfileMeta({ text }) {
  return <li className={styles.profileMetaItem}>{text}</li>;
}

ProfileMeta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProfileMeta;
