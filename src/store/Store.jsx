import { configureStore } from "@reduxjs/toolkit";
import { comSlice } from "../redux";

export const Store = configureStore({
    reducer: {
        com: comSlice.reducer
    }
})