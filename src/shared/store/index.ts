import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './slices';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([]);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const dispatch = store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
