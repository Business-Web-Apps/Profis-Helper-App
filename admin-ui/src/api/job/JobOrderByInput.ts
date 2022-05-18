import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  estimatedDuration?: SortOrder;
  id?: SortOrder;
  jobTypeId?: SortOrder;
  numberOfHelper?: SortOrder;
  paidAmount?: SortOrder;
  pricePerHour?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
