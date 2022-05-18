import { JobReportUpdateManyWithoutJobsInput } from "./JobReportUpdateManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobUpdateInput = {
  currentStatus?:
    | "submitted"
    | "accepted"
    | "applyable"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";
  description?: string;
  endDate?: Date | null;
  estimatedDuration?: number;
  jobReports?: JobReportUpdateManyWithoutJobsInput;
  jobType?: JobTypeWhereUniqueInput | null;
  numberOfHelper?: number;
  paidAmount?: number | null;
  pricePerHour?: number;
  startDate?: Date;
  title?: string;
};
