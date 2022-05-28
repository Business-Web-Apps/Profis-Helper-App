import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type JobReportUpdateInput = {
  description?: string | null;
  job?: JobWhereUniqueInput | null;
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
  title?: string;
};
