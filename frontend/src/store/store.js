import {configureStore} from "@reduxjs/toolkit";
import {reducer as bookReducer} from "./book-slice/book-slice.js";
import {reducer as uiReducer} from "./uiSlice/ui-slice.js";
import {reducer as bookFilterReducer} from "./book-filter-slice/book-filter-sclice.js";

const store = configureStore({
    reducer: {
        book: bookReducer,
        ui: uiReducer,
        bookFilters: bookFilterReducer
    }
})

export {store};