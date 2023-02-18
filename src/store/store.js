import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterSlice from './slices/filterSlice';
import sushiSlice from './slices/sushiSlice';
import userSlice from './slices/userSlice';

const reducer = { sushi: sushiSlice, filters: filterSlice, user: userSlice };

const rootReducer = combineReducers(reducer);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['sushi'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
