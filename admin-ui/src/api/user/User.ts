export type User = {
  createdAt: Date;
  email: string;
  firstName: string | null;
  gender?: "m" | "f" | "o" | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
