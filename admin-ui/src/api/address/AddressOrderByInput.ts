import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressType?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  housNum?: SortOrder;
  id?: SortOrder;
  region?: SortOrder;
  streetName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
