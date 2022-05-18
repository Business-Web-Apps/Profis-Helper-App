export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  gender?: "m" | "f" | "o" | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
