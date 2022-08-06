import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ClientActions from "../../actions/client";

const initialState = {
    data: [],
    clientData: [],
    error: false,
    loading: false,
}

export const getAll = createAsyncThunk(
    "clients/getAll",
    async () => {
        try {
            const res = await ClientActions.getAll();
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getById = createAsyncThunk(
    "clients/getById",
    async ({ id }) => {
        try {
            const res = await ClientActions.getById(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const create = createAsyncThunk(
    "clients/create",
    async ({ nombre, apellido, cedula, sexo, fecha_nacimiento }) => {
        try {
            const res = await ClientActions.create({ nombre, apellido, cedula, sexo, fecha_nacimiento });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const update = createAsyncThunk(
    "clients/update",
    async ({ id, nombre, apellido, sexo, fecha_nacimiento }) => {
        try {
            const res = await ClientActions.update(id, { nombre, apellido, sexo, fecha_nacimiento });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const remove = createAsyncThunk(
    "clients/remove",
    async ({ id }) => {
        try {
            const res = await ClientActions.remove(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const clientsSlice = createSlice({
    name: 'client',
    initialState,
    reducers: { },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.loading = true;
        },
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.clientData = [];
        },
        [getAll.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
        },

        [getById.pending]: (state, action) => {
            state.loading = true;
        },
        [getById.fulfilled]: (state, action) => {
            state.loading = false;
            state.clientData = action.payload;
        },
        [getById.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
        },

        [create.pending]: (state, action) => {
            state.loading = true;
        },
        [create.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = [action.payload, ...state.data];
        },
        [create.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
        },

        [update.pending]: (state, action) => {
            state.loading = true;
        },
        [update.fulfilled]: (state, action) => {
            const updatedData = state.data.map((client) => 
                client.id === action.payload.id ? action.payload : client
            );
            state.loading = false;
            state.data = updatedData;
        },
        [update.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
        },

        [remove.pending]: (state, action) => {
            state.loading = true;
        },
        [remove.fulfilled]: (state, action) => {
            const updatedData = state.data.filter((client) => 
                client.id !== action.payload.id
            );
            state.loading = false;
            state.data = updatedData;
        },
        [remove.rejected]: (state, action) => {
            state.error = true;
            state.loading = false;
        },
    },
});

export const { getClients } = clientsSlice.actions

export default clientsSlice.reducer