import { User } from "@domain/entities";
import { UserStore } from "@domain/stores";

/**
 * This represents some generic auth provider API, like Firebase.
 */
const UserEmptyState: User = {
  username: '',
  email: '',
  role: {
    name: '',
    description: '',
    type: ''
  }
};

export const fakeAuthProvider: UserStore = {
  // State
  isAuthenticated: false,
  user: UserEmptyState,

  // Actions
  async signin(username: string) {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = true;
    fakeAuthProvider.user = {
      username: username,
      email: 'email@email.com',
      role: {
        name: 'admin',
        description: 'admin',
        type: 'admin'
      }
    };
  },
  async signout() {
    await new Promise((r) => setTimeout(r, 500)); // fake delay
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.user = UserEmptyState;
  },
};