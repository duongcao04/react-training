import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('login', async (inforlogin) => {
  const res = await axios.get('http://localhost:3001/api/users');
  return {
    users: res.data,
    inforlogin: inforlogin,
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    userData: [],
    isError: false,
    message: '',
    isLogin: false,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);

      state.userData = action.payload;
      state.isLoading = false;
      state.isLogin = true;
    });

    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { addCart } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
