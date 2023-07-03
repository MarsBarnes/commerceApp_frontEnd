import { configureStore } from '@reduxjs/toolkit';

import slice from '../components/slice'

export const store = configureStore({
  reducer: slice.reducer
});
