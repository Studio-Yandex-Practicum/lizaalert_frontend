import { MutableRefObject, useLayoutEffect, useRef } from 'react';

type IntersectionObserverConfig = {
  elementRef: MutableRefObject<null>;
  callbackOnIntersect: () => void;
  callbackOnHide?: () => void;
  rootMargin?: string;
  threshold?: number;
};

/**
 * @description Хук используется для подгрузки данных и других манипуляций при появлении elementRef во вьюпорте
 *
 * @props
 * - elementRef - ref - ref элемента, за которым нужно наблюдать (из useRef)
 * - callbackOnIntersect - function - коллбек, срабатывающий при появлении элемента во вьюпорте
 * - callbackOnHide - function - коллбек, срабатывающий при скрытии элемента из вьюпорта
 * - rootMargin - string - отступы вокруг элемента
 * - threshold - number - процент от высоты элемента, которая может быть показана, прежде чем сработает обработчик
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
