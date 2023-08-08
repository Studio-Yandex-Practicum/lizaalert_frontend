import { MutableRefObject, useLayoutEffect, useRef } from 'react';

export type IntersectionObserverConfig = {
  /** ref элемента, за которым нужно наблюдать (из useRef). */
  elementRef: MutableRefObject<null>;
  /** Функция-коллбек, срабатывающая при появлении элемента во вьюпорте. */
  callbackOnIntersect: VoidFunction;
  /** Функция-коллбек, срабатывающая при скрытии элемента из вьюпорта. */
  callbackOnHide?: VoidFunction;
  /** Отступы вокруг элемента. */
  rootMargin?: string;
  /** Процент от высоты элемента, которая может быть показана, прежде чем сработает обработчик. */
  threshold?: number;
};

/**
 * Хук используется для подгрузки данных и других манипуляций при появлении `elementRef` во вьюпорте.
 * */

export const useIntersectionObserver = ({
  elementRef,
  callbackOnIntersect,
  callbackOnHide,
  rootMargin,
  threshold,
}: IntersectionObserverConfig) => {
  const observer = useRef<null | IntersectionObserver>(null);

  useLayoutEffect(() => {
    if (elementRef?.current) {
      const options = {
        root: null,
        rootMargin: rootMargin ?? '0px',
        threshold: threshold ?? 0,
      };

      observer.current = new IntersectionObserver(([target]) => {
        if (target.isIntersecting) {
          callbackOnIntersect();
        } else if (callbackOnHide) {
          callbackOnHide();
        }
      }, options);

      observer.current.observe(elementRef.current);
    }

    return () => {
      if (observer?.current && elementRef?.current) {
        observer.current.unobserve(elementRef.current);
      }
    };
  }, [callbackOnIntersect, callbackOnHide, elementRef]);
};
