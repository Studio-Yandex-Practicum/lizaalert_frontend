// import {
//   createSlice,
//   isFulfilled,
//   isPending,
//   isRejected,
// } from '@reduxjs/toolkit';
// import { GENERAL_ERROR } from 'utils/constants';
// import { fetchRegistration } from './thunk';
// import type { RegisterState } from './types';

// const initialState: RegisterState = {
//   isRegister: false,
//   isLoading: true,
//   error: null,
// };

// export const registerSlice = createSlice({
//   name: 'register',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(isPending(fetchRegistration), (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addMatcher(isFulfilled(fetchRegistration), (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.isRegister = payload;
//     });
//     builder.addMatcher(isRejected(fetchRegistration), (state, { error }) => {
//       state.isRegister = false;
//       state.isLoading = false;
//       state.error = error.message ?? GENERAL_ERROR;
//     });
//   },
// });

// export default registerSlice.reducer;
