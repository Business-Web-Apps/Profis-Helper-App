import { JobReportCreateNestedManyWithoutJobsInput } from "./JobReportCreateNestedManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

export type JobCreateInput = {
  currentStatus:
    | "submitted"
    | "accepted"
    | "applyable"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";
  description: string;
  endDate?: Date | null;
  estimatedDuration: number;
  jobReports?: JobReportCreateNestedManyWithoutJobsInput;
  jobType?: JobTypeWhereUniqueInput | null;
  numberOfHelper: number;
  paidAmount?: number | null;
  pricePerHour: number;
  startDate: Date;
  title: string;
};
