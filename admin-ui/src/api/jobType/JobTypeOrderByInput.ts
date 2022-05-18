import { SortOrder } from "../../util/SortOrder";

export type JobTypeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
