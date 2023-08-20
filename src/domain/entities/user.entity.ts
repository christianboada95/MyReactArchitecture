export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;

  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createAt?: Date;
  updateAt?: Date;

  role: Role;
}

export interface Role {
  id?: number;
  name: string;
  description: string;
  type: string;
}
