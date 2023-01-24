import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { britingAPI } from "../service";

export const store = configureStore({
  reducer: {
    [britingAPI.reducerPath]: britingAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(britingAPI.middleware),
});

setupListeners(store.dispatch);
