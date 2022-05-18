import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount: number;
  job: JobWhereUniqueInput;
  method?: "bankTransfer" | "creditCard" | "Paypal" | "other" | null;
  user: UserWhereUniqueInput;
};
