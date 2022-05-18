import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringFilter;
  country?: StringFilter;
  housNum?: StringFilter;
  id?: StringFilter;
  region?: StringFilter;
  streetName?: StringFilter;
};
