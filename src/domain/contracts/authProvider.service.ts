import { User } from "@domain/entities";

interface AuthProviderService {
  // State
  user: User | undefined;
  isAuthenticated: boolean;

  // Actions 
  signin(username: string): Promise<void>;
  signout(): Promise<void>;
}

export type { AuthProviderService }