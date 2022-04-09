import PropTypes from 'prop-types';

const lessonPropTypes = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['finished', 'active', 'coming']),
});

const courseContentPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  lessons: PropTypes.arrayOf(lessonPropTypes).isRequired,
});

export { courseContentPropTypes, lessonPropTypes };
