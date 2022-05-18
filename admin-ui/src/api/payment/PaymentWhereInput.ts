import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  method?: "bankTransfer" | "creditCard" | "Paypal" | "other";
  user?: UserWhereUniqueInput;
};
