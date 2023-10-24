import { configureStore } from "@reduxjs/toolkit";
import { aviationStackApi } from "./api/flightsApi";

export const store = configureStore({
  reducer: {
    [aviationStackApi.reducerPath]: aviationStackApi.reducer,
    // Другие редюсеры вашего приложения
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      aviationStackApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState;
