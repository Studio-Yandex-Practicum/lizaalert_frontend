import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { isDevEnv } from 'config';
import { rootReducer } from './reducers';
import type { AppState } from './types';

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDevEnv,
});

export type AppDispatch = typeof store.dispatch;

/** Типизированный хук диспетчера, использовать его в компонентах. */
export const useAppDispatch: () => AppDispatch = useDispatch;

/** Типизированный хук селектора, использовать его в компонентах. */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
