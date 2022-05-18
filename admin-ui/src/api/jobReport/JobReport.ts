import { Job } from "../job/Job";

export type JobReport = {
  createdAt: Date;
  description: string | null;
  id: string;
  job?: Job | null;
  jobStatus?:
    | "submitted"
    | "accepted"
    | "applyble"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";
  title: string;
  updatedAt: Date;
};
