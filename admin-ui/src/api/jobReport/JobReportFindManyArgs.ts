import { JobReportWhereInput } from "./JobReportWhereInput";
import { JobReportOrderByInput } from "./JobReportOrderByInput";

export type JobReportFindManyArgs = {
  where?: JobReportWhereInput;
  orderBy?: Array<JobReportOrderByInput>;
  skip?: number;
  take?: number;
};
