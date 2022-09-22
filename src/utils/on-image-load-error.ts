import { SyntheticEvent } from 'react';
import placeholderCover from '../assets/images/course-placeholder.jpg';

export const onImageLoadError = (
  event: SyntheticEvent<HTMLImageElement, Event>
) => {
  // eslint-disable-next-line no-param-reassign
  event.currentTarget.src = placeholderCover;
};
