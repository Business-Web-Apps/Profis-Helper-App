import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  housNum?: SortOrder;
  id?: SortOrder;
  region?: SortOrder;
  streetName?: SortOrder;
  updatedAt?: SortOrder;
};
