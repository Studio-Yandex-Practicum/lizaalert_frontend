import { render } from '@testing-library/react';
import Loader from './loader';

describe('Компонент Loader', () => {
  test('Loader рендерится в DOM', () => {
    const loaderOverlay = render(<Loader />).baseElement;
    expect(loaderOverlay).toBeInTheDocument();

    const loaderSvg = loaderOverlay.querySelector('svg');
    expect(loaderSvg).toBeInTheDocument();

    const loaderCircle = loaderSvg.querySelector('circle');
    expect(loaderCircle).toBeInTheDocument();
  });
});
