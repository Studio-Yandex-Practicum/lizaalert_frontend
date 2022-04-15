import { useState } from 'react';
import PropTypes from 'prop-types';
import Test from '../test/test';
import TestPreview from '../test-preview/test-preview';

function TestContent({ test }) {
  const [renderTest, setRenderTest] = useState(test.inProgress);

  const toggleRender = () => setRenderTest(!renderTest);

  if (renderTest) {
    return <Test test={test} toggleRender={toggleRender} />;
  }

  return <TestPreview test={test} toggleRender={toggleRender} />;
}

TestContent.propTypes = {
  test: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    passingScore: PropTypes.number.isRequired,
    retries: PropTypes.number.isRequired,
    deadline: PropTypes.string.isRequired,
    inProgress: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TestContent;
