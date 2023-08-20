import type { User } from "@domain/entities";

interface UserStore {
  // State
  user: User | undefined;
  isAuthenticated: boolean;

  // Actions 
  signin(username: string): Promise<void>;
  signout(): Promise<void>;
}


export type { UserStore }

