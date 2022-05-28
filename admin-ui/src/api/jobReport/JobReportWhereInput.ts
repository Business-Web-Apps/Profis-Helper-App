import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type JobReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
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
  title?: StringFilter;
};
