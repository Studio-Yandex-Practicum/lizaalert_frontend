import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useEvent } from 'hooks/use-event';
import type { UseAccordionReturnType } from '../types';

const ANIMATION_DURATION = 300;

/**
 * Хук для управления логикой аккордеона.
 *
 * @param open - флаг, открыт ли аккордеон в текущий момент.
 *
 * @returns \{ isOpen, height, toggleAccordion, contentRef \}
 * */

export const useAccordion = (open: boolean): UseAccordionReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [height, setHeight] = useState(open ? 'auto' : '0px');

  const contentRef = useRef<HTMLElement>(null);

  const updateContentHeight = useEvent(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  });

  useEffect(() => {
    setTimeout(() => {
      updateContentHeight();
    }, ANIMATION_DURATION);
  }, [contentRef.current]);

  const handleInnerAccordion = useEvent((evt: CustomEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    if (contentRef.current && target && target !== contentRef.current) {
      setHeight(
        isOpen
          ? `${contentRef.current.scrollHeight + target.scrollHeight}px`
          : '0px'
      );
    }
  });

  useLayoutEffect(() => {
    if (contentRef.current) {
      window.addEventListener('resize', updateContentHeight);
      contentRef.current.addEventListener(
        'accordionToggle',
        handleInnerAccordion as EventListener
      );
    }

    return () => {
      if (contentRef.current) {
        window.removeEventListener('resize', updateContentHeight);
        contentRef.current.removeEventListener(
          'accordionToggle',
          handleInnerAccordion as EventListener
        );
      }
    };
  }, [contentRef.current, handleInnerAccordion, updateContentHeight]);

  const toggleAccordion = useEvent(() => {
    if (contentRef.current) {
      setIsOpen(!isOpen);
      setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);

      const event = new Event('accordionToggle', { bubbles: true });
      contentRef.current.dispatchEvent(event);
    }
  });

  return {
    isOpen,
    height,
    toggleAccordion,
    contentRef,
  };
};
