import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../templates';

// Временный компонент-заглушка, необходимо переписать

function TheoryLesson({ content }) {
  return (
    <Card>
      {/* eslint-disable-next-line */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Card>
  );
}

TheoryLesson.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TheoryLesson;
