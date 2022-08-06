import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "../features/client/clientSlice";
import filterSlice from "../features/filters/filterSlice";

export const store = configureStore({
    reducer: {
        client: clientSlice,
        filter: filterSlice
    },
})