import { JobReportCreateNestedManyWithoutJobsInput } from "./JobReportCreateNestedManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";
import { PaymentCreateNestedManyWithoutJobsInput } from "./PaymentCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  currentStatus:
    | "Submitted"
    | "Accepted"
    | "Applyable"
    | "Ready"
    | "InProgress"
    | "Aborted"
    | "Interrupted"
    | "Done"
    | "Cancelled";
  description: string;
  endDate?: Date | null;
  estimatedDuration: number;
  jobReports?: JobReportCreateNestedManyWithoutJobsInput;
  jobType?: JobTypeWhereUniqueInput | null;
  numberOfHelper: number;
  paidAmount?: number | null;
  payments?: PaymentCreateNestedManyWithoutJobsInput;
  pricePerHour: number;
  startDate: Date;
  title: string;
};
