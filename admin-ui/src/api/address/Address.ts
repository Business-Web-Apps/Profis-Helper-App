import { User } from "../user/User";

export type Address = {
  addressType?: "invoice" | "personal" | "other";
  city: string;
  country: string;
  createdAt: Date;
  housNum: string;
  id: string;
  region: string;
  streetName: string;
  updatedAt: Date;
  user?: User | null;
};
