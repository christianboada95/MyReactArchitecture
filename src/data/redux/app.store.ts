import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@domain/states/user.state';
import { User } from '@domain/entities';

export interface AppStore {
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
});