import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  estimatedDuration?: SortOrder;
  id?: SortOrder;
<<<<<<< HEAD
  jobTypeId?: SortOrder;
=======
  jobType?: SortOrder;
>>>>>>> main
  numberOfHelper?: SortOrder;
  paidAmount?: SortOrder;
  pricePerHour?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
