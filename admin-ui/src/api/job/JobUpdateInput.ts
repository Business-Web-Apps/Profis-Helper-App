import { JobReportUpdateManyWithoutJobsInput } from "./JobReportUpdateManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";
import { PaymentUpdateManyWithoutJobsInput } from "./PaymentUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  currentStatus?:
    | "Submitted"
    | "Accepted"
    | "Applyable"
    | "Ready"
    | "InProgress"
    | "Aborted"
    | "Interrupted"
    | "Done"
    | "Cancelled";
  description?: string;
  endDate?: Date | null;
  estimatedDuration?: number;
  jobReports?: JobReportUpdateManyWithoutJobsInput;
  jobType?: JobTypeWhereUniqueInput | null;
  numberOfHelper?: number;
  paidAmount?: number | null;
  payments?: PaymentUpdateManyWithoutJobsInput;
  pricePerHour?: number;
  startDate?: Date;
  title?: string;
};
