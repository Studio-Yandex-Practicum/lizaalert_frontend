import { createSlice } from '@reduxjs/toolkit';
import fetchUser from './thunk';

const initialState = {
  user: {
    id: '',
    email: '',
    tel: '',
    password: '',
    token: '',
  },
  isSavedData: false,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.tel = action.payload.tel;
      state.user.password = action.payload.password;
    },
    setIsSavedData(state, action) {
      state.isSavedData = action.payload.isSavedData;
    },
    setRemoveData(state) {
      state.user = {};
      state.isSavedData = false;
    },
  },
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUser.fulfilled.type]: (state, { payload }) => {
      state.user = {
        id: payload.id,
        email: payload.email,
        tel: payload.tel,
        password: payload.password,
        token: payload.token,
      };
      state.isSavedData = payload.isSavdeData;
      state.isLoading = false;
    },
    [fetchUser.rejected.type]: (state, { payload }) => {
      state.user = {};
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setUser, setIsSavedData, setRemoveData } = userSlice.actions;

export default userSlice.reducer;
