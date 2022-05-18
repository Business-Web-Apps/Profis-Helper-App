import { SortOrder } from "../../util/SortOrder";

export type JobReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  jobStatus?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
