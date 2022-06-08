import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import errorCat from '../../../assets/images/error-cat.png';
import { Button } from '../../molecules';
import { Heading } from '../../atoms';
import styles from './error-boundary.module.scss';
import { routes } from '../../../config';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleClick() {
    const { dispatch } = this.props;

    dispatch({
      type: 'courses/resetAllState',
    });

    window.location.replace(routes.courses.path);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={styles.error}>
          <Heading level={1} title="Простите, мы всё сломали" />
          <img src={errorCat} alt="Простите, мы всё сломали" width={400} />
          <Button onClick={() => this.handleClick()}>Верните на главную</Button>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ErrorBoundary);
