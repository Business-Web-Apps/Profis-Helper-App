import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
<<<<<<< HEAD
import { JobReportListRelationFilter } from "../jobReport/JobReportListRelationFilter";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";
=======
>>>>>>> main
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type JobWhereInput = {
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
  description?: StringFilter;
  endDate?: DateTimeNullableFilter;
  estimatedDuration?: FloatFilter;
  id?: StringFilter;
<<<<<<< HEAD
  jobReports?: JobReportListRelationFilter;
  jobType?: JobTypeWhereUniqueInput;
=======
  jobType?: "move" | "gardening" | "furnitureAssembly";
>>>>>>> main
  numberOfHelper?: FloatFilter;
  paidAmount?: FloatNullableFilter;
  pricePerHour?: FloatFilter;
  startDate?: DateTimeFilter;
  title?: StringFilter;
};
