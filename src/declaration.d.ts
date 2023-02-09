declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg';

declare type Nullable<T> = T | null | undefined;
declare type VoidFunction = (...args: unknown[]) => void;
declare type AnyFunction = (...args: never) => void | never;
