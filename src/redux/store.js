// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { messagesReducer } from "./reducers";

// to show the changes even after refreshing the page, redux-persist is used
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, messagesReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  })

export const persistor = persistStore(store);
