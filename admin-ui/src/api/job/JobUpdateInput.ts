<<<<<<< HEAD
import { JobReportUpdateManyWithoutJobsInput } from "./JobReportUpdateManyWithoutJobsInput";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";

=======
>>>>>>> main
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
<<<<<<< HEAD
  jobReports?: JobReportUpdateManyWithoutJobsInput;
  jobType?: JobTypeWhereUniqueInput | null;
=======
  jobType?: "move" | "gardening" | "furnitureAssembly";
>>>>>>> main
  numberOfHelper?: number;
  paidAmount?: number | null;
  pricePerHour?: number;
  startDate?: Date;
  title?: string;
};
