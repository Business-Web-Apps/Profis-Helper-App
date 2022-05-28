import { Job } from "../job/Job";
import { User } from "../user/User";

export type Payment = {
  amount: number;
  createdAt: Date;
  id: string;
  job?: Job;
  method?: "bankTransfer" | "creditCard" | "Paypal" | "other" | null;
  updatedAt: Date;
  user?: User;
};
