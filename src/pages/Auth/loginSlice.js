import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
};

export const login = createAsyncThunk(`${process.env.REACT_APP_API}/user/login`, async (credentials) => {
  console.log(`${process.env.REACT_APP_API}/user/login`)
    const response = await axios.post(`http://localhost:7000/api/v1/users/login`, credentials);
    return response.data;
});

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.userInfo = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
                localStorage.setItem("SavedToken", 'Bearer ' + action.payload.token);
                Navigate("/");
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;