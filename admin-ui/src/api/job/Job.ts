import { JobReport } from "../jobReport/JobReport";
import { JobType } from "../jobType/JobType";
import { Payment } from "../payment/Payment";

export type Job = {
  createdAt: Date;
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
  description: string;
  endDate: Date | null;
  estimatedDuration: number;
  id: string;
  jobReports?: Array<JobReport>;
  jobType?: JobType | null;
  numberOfHelper: number;
  paidAmount: number | null;
  payments?: Array<Payment>;
  pricePerHour: number;
  startDate: Date;
  title: string;
  updatedAt: Date;
};
