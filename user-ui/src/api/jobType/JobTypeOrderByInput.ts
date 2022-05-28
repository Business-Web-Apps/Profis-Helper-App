import { SortOrder } from "../../util/SortOrder";

export type JobTypeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  pricePerHour?: SortOrder;
  updatedAt?: SortOrder;
};
