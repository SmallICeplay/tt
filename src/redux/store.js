import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./api/cryptoApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
})