// authenticationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, 
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  
  name: 'authentication',
  initialState,
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default  authenticationSlice.reducer;
