import React from 'react';
import { connect } from 'react-redux';
import { Heading } from 'components/atoms/heading';
import { Button } from 'components/molecules/button';
import { routes } from 'config';
import errorCat from 'assets/images/error-cat.png';
import styles from './error-boundary.module.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleClick = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'courses/resetAllState',
    });

    window.location.replace(routes.courses.path);
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={styles.error}>
          <Heading level={1} title="Простите, мы всё сломали" />
          <img
            className={styles.image}
            src={errorCat}
            alt="Простите, мы всё сломали"
          />
          <Button onClick={this.handleClick}>Верните на главную</Button>
        </div>
      );
    }

    return children;
  }
}

export default connect()(ErrorBoundary);
