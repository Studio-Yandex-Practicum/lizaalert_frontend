import PropTypes from 'prop-types';
import { Card, Heading } from '../../atoms';
import { Button } from '../../molecules';
import styles from './test.module.scss';

function Test({ toggleRender }) {
  return (
    <Card htmlTag="article" className={styles.test}>
      <Heading level={2} size="l" title="Тест" />
      <Button view="text" onClick={toggleRender}>
        Посмотреть условия
      </Button>
    </Card>
  );
}

Test.propTypes = {
  toggleRender: PropTypes.func.isRequired,
};

export default Test;
