import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type JobReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
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
  title?: StringFilter;
};
