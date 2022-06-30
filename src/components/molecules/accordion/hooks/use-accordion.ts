import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Nullable } from '../../../../types';

const ANIMATION_DURATION = 300;

type UseAccordionReturnType = {
  isOpen: boolean;
  toggleAccordion: () => void;
  contentRef: Nullable<RefObject<HTMLElement>>;
  height: string;
};

const useAccordion = (open: boolean): UseAccordionReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const [height, setHeight] = useState(open ? 'auto' : '0px');

  const contentRef = useRef<HTMLElement>(null);

  const updateContentHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [contentRef.current]);

  useEffect(() => {
    setTimeout(() => {
      updateContentHeight();
    }, ANIMATION_DURATION);
  }, [contentRef.current]);

  const handleInnerAccordion = useCallback(
    (evt: CustomEvent<HTMLElement>) => {
      const target = evt.target as HTMLElement;
      if (contentRef.current && target && target !== contentRef.current) {
        setHeight(
          isOpen
            ? `${contentRef.current.scrollHeight + target.scrollHeight}px`
            : '0px'
        );
      }
    },
    [contentRef.current]
  );

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
  }, [contentRef.current, handleInnerAccordion]);

  const toggleAccordion = () => {
    if (contentRef.current) {
      setIsOpen(!isOpen);
      setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);

      const event = new Event('accordionToggle', { bubbles: true });
      contentRef.current.dispatchEvent(event);
    }
  };

  return {
    isOpen,
    height,
    toggleAccordion,
    contentRef,
  };
};

export default useAccordion;