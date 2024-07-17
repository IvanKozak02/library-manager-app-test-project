import {configureStore} from "@reduxjs/toolkit";
import {reducer as bookReducer} from "./book-slice/book-slice.js";
import {reducer as uiSlice} from "./uiSlice/ui-slice.js";

const store = configureStore({
    reducer: {
        book: bookReducer,
        ui: uiSlice
    }
})

export {store};