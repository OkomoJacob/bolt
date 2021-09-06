//Store configurations
// Where we store our navigation data e.g Origin, end
import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});