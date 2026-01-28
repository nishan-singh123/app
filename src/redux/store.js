import { configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };