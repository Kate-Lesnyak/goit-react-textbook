import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";
import { rootReducer } from './reducers';
import persistStore from 'redux-persist/es/persistStore';

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);

