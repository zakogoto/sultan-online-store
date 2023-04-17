import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { productAPI } from "../services/productServices";
import {productPageSlice} from './reducers/productPageSlice';
import { cartReducer } from './reducers/cartSlice';
import { catalogReducer } from './reducers/catalogSlice';
import { filterReducer } from './reducers/filterSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    catalog: catalogReducer,
    filters: filterReducer,
    [productPageSlice.name]: productPageSlice.reducer,
    [productAPI.reducerPath]: productAPI.reducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat( productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']