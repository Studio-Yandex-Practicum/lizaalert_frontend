import { Typography } from './typography';
import type { TypographyProps, TypographyTag } from './types';

type SpecificTagProps = Omit<TypographyProps, 'htmlTag'>;

export function P(props: SpecificTagProps) {
  return <Typography htmlTag="p" {...props} />;
}

export function Span(props: SpecificTagProps) {
  return <Typography htmlTag="span" {...props} />;
}

export function Li(props: SpecificTagProps) {
  return <Typography htmlTag="li" {...props} />;
}

export function Time(props: SpecificTagProps) {
  return <Typography htmlTag="time" {...props} />;
}

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Heading({ level, ...props }: SpecificTagProps & HeadingProps) {
  const tag = `h${level}` as TypographyTag;
  return <Typography htmlTag={tag} {...props} />;
}
