import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  addressType: "invoice" | "personal" | "other";
  city: string;
  country: string;
  housNum: string;
  region: string;
  streetName: string;
  user?: UserWhereUniqueInput | null;
};
