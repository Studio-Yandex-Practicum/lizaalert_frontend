import { useLayoutEffect, useRef } from 'react';
import type { IntersectionObserverConfig } from '../types';

/**
 * Хук используется для подгрузки данных и других манипуляций при появлении `elementRef` во вьюпорте.
 * */

const useIntersectionObserver = ({
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

export default useIntersectionObserver;
