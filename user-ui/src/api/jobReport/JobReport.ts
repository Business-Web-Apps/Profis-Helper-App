import { Job } from "../job/Job";

export type JobReport = {
  createdAt: Date;
  description: string | null;
  id: string;
  job?: Job | null;
  jobStatus?:
    | "Submitted"
    | "Accepted"
    | "Applyble"
    | "Ready"
    | "InProgress"
    | "Aborted"
    | "Interrupted"
    | "Done"
    | "Cancelled";
  title: string;
  updatedAt: Date;
};
