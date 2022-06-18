import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ANIMATION_DURATION } from '../../../../utils/constants';

const useAccordion = (open) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(open ? 'auto' : '0px');

  const contentRef = useRef(null);

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

  const innerAccordionToggleHandler = useCallback(
    (evt) => {
      if (evt.target !== contentRef.current) {
        setHeight(
          isOpen
            ? `${contentRef.current.scrollHeight + evt.target.scrollHeight}px`
            : '0px'
        );
      }
    },
    [contentRef.current]
  );

  useLayoutEffect(() => {
    window.addEventListener('resize', updateContentHeight);
    contentRef.current.addEventListener(
      'accordionToggle',
      innerAccordionToggleHandler
    );

    return () => {
      window.removeEventListener('resize', updateContentHeight);
      if (contentRef.current) {
        contentRef.current.removeEventListener(
          'accordionToggle',
          innerAccordionToggleHandler
        );
      }
    };
  }, [contentRef.current, innerAccordionToggleHandler]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);

    const event = new Event('accordionToggle', { bubbles: true });
    contentRef.current.dispatchEvent(event);
  };

  return {
    isOpen,
    height,
    toggleAccordion,
    contentRef,
  };
};

export default useAccordion;
