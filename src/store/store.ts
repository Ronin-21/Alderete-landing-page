import { configureStore } from "@reduxjs/toolkit";
import { odooApi } from "./api/odooApi.ts";

export const store = configureStore({
  reducer: {
    [odooApi.reducerPath]: odooApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(odooApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
