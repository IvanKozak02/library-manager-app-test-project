import {createSlice} from "@reduxjs/toolkit";

const initialUiState = {
    isModalOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers:{
        setModalState(state, action){
            state.isModalOpen = action.payload;
        }
    }
})

export const reducer = uiSlice.reducer;
export const actions = uiSlice.actions;