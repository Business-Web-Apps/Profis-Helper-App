import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  addressType?: "invoice" | "personal" | "other";
  city?: string;
  country?: string;
  housNum?: string;
  region?: string;
  streetName?: string;
  user?: UserWhereUniqueInput | null;
};
