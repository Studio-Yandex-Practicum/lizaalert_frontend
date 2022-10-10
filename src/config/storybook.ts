import { CSSProperties } from 'react';

export const exportConfig = {
  parameters: {
    controls: {
      sort: 'alpha',
    },
  },
};

export const textStub =
  'Однозначно, многие известные личности освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно. Имеется спорная точка зрения, гласящая примерно следующее: сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть представлены в исключительно положительном свете. Но начало повседневной работы по формированию позиции требует определения и уточнения кластеризации усилий.';

export const flexLayout: CSSProperties = {
  display: 'flex',
  gap: 12,
};

export const flexLayoutColumn: CSSProperties = {
  ...flexLayout,
  flexDirection: 'column',
};

export const flexLayoutRow: CSSProperties = {
  ...flexLayout,
  alignItems: 'center',
};

export const disableControls = <T extends string>(...properties: T[]) =>
  properties.reduce<Record<T, { control: boolean }>>((acc, key) => {
    // eslint-disable-next-line no-param-reassign
    acc[key] = {
      control: false,
    };
    return acc;
  }, {} as Record<T, { control: boolean }>);
