import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type JobReportUpdateInput = {
  description?: string | null;
  job?: JobWhereUniqueInput | null;
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
  title?: string;
};
