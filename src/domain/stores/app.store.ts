import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@domain/states/user.state';

export interface AppStore {
  user: any;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
});