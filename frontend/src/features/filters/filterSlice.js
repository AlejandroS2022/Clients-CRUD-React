import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        applySearch: (state, action) => {
            state.search = action.payload;
        }
    },
});

export const { applySearch } = filterSlice.actions

export default filterSlice.reducer