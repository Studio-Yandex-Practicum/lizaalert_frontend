import type { FC } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import type { MarkdownProps } from './types';

import styles from './markdown.module.scss';

export const Markdown: FC<MarkdownProps> = ({ children, className }) => (
  <ReactMarkdown className={classnames(styles.markdown, className)} skipHtml>
    {children}
  </ReactMarkdown>
);
