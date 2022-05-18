import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  email?: StringFilter;
  firstName?: StringNullableFilter;
  gender?: "m" | "f" | "o";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
