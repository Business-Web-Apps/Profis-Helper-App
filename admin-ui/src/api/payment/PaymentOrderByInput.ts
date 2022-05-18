import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  method?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
