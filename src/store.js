import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactReducer } from "./reducers/contactReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({contactReducer}));

const store = configureStore({
  reducer: persistedReducer
});

export default store;

export const persistor = persistStore(store);

