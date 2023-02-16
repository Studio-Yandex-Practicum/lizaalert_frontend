declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare type Nullable<T> = T | null | undefined;
declare type VoidFunction = (...args: unknown[]) => void;
declare type AnyFunction = (...args: never) => void | never;
