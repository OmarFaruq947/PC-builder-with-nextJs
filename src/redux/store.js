import { configureStore } from "@reduxjs/toolkit";
import { pcApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: { [pcApi.reducerPath]: pcApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pcApi.middleware),
});
