import { render } from '@testing-library/react';
import Loader from './loader';
import styles from './loader.module.scss';

describe('Компонент Loader', () => {
  it('Рендерится в DOM', () => {
    const { container } = render(<Loader />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).toBeInTheDocument();

    const loaderSvg = loaderOverlay.querySelector(`.${styles.loader}`);
    expect(loaderSvg).toBeInTheDocument();

    const loaderPath = loaderSvg.querySelector(`.${styles.path}`);
    expect(loaderPath).toBeInTheDocument();
  });

  it('Принимает prop isFixed и при true ставит класс overlay_pos_fixed', () => {
    const { container } = render(<Loader isFixed />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).toHaveClass(styles.overlay_pos_fixed);
  });

  it('Принимает prop isFixed и при false НЕ ставит класс overlay_pos_fixed', () => {
    const { container } = render(<Loader isFixed={false} />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).not.toHaveClass(styles.overlay_pos_fixed);
  });

  it('Принимает prop isAbsolute и при true ставит класс overlay_pos_absolute', () => {
    const { container } = render(<Loader isAbsolute />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).toHaveClass(styles.overlay_pos_absolute);
  });

  it('Принимает prop isAbsolute и при false НЕ ставит класс overlay_pos_absolute', () => {
    const { container } = render(<Loader isAbsolute={false} />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).not.toHaveClass(styles.overlay_pos_absolute);
  });

  it('Принимает prop className и ставит этот класс на overlay', () => {
    const { container } = render(<Loader className="test" />);
    const loaderOverlay = container.querySelector(`.${styles.overlay}`);
    expect(loaderOverlay).toHaveClass('test');
  });
});
