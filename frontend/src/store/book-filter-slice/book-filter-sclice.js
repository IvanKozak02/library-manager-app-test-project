import {createSlice} from "@reduxjs/toolkit";

const initialFilterState = {
    title: '',
    author: ''
}

const bookFilterSlice = createSlice({
    name: 'bookFilters',
    initialState: initialFilterState,
    reducers: {
        setTitle(state, action){
            state.title = action.payload;
        },
        setAuthor(state, action){
            state.author = action.payload;
        }
    }
})

export const reducer = bookFilterSlice.reducer;
export const actions = bookFilterSlice.actions;