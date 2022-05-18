import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number;
  job?: JobWhereUniqueInput;
  method?: "bankTransfer" | "creditCard" | "Paypal" | "other" | null;
  user?: UserWhereUniqueInput;
};
