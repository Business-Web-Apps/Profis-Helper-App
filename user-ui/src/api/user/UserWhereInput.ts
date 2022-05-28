import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type UserWhereInput = {
  addresses?: AddressListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Others";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  username?: StringFilter;
};
