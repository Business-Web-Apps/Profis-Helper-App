import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  addressType?: "invoice" | "personal" | "other";
  city?: StringFilter;
  country?: StringFilter;
  housNum?: StringFilter;
  id?: StringFilter;
  region?: StringFilter;
  streetName?: StringFilter;
  user?: UserWhereUniqueInput;
};
