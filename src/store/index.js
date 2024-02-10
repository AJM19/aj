import { configureStore } from '@reduxjs/toolkit';
import { athleteReducer, ATHLETE_FEATURE_KEY } from './athlete.slice';
import { sleeperAPI } from './sleeperAPI';

export const storeConfig = {
  reducer: {
    [ATHLETE_FEATURE_KEY]: athleteReducer,
    [sleeperAPI.reducerPath]: sleeperAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sleeperAPI.middleware),
  enhancers: [],
};
export const store = configureStore(storeConfig);
