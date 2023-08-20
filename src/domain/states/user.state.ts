import { User } from "@domain/entities";
import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState: User = {
  username: '',
  email: '',
  role: {
    name: '',
    description: '',
    type: ''
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (_state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => UserEmptyState
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;