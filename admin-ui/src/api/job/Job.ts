<<<<<<< HEAD
import { JobReport } from "../jobReport/JobReport";
import { JobType } from "../jobType/JobType";

=======
>>>>>>> main
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
<<<<<<< HEAD
  jobReports?: Array<JobReport>;
  jobType?: JobType | null;
=======
  jobType?: "move" | "gardening" | "furnitureAssembly";
>>>>>>> main
  numberOfHelper: number;
  paidAmount: number | null;
  pricePerHour: number;
  startDate: Date;
  title: string;
  updatedAt: Date;
};
