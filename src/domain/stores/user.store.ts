import type { User } from "@domain/entities";
import { userSlice } from "@domain/states/user.state";
import { configureStore } from "@reduxjs/toolkit";

interface UserStore {
  // State
  user: User | undefined;
  isAuthenticated: boolean;

  // Actions 
  signin(username: string): Promise<void>;
  signout(): Promise<void>;
}


export type { UserStore }

