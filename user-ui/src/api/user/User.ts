import { Address } from "../address/Address";
import { Payment } from "../payment/Payment";

export type User = {
  addresses?: Array<Address>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
