import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { JobReportListRelationFilter } from "../jobReport/JobReportListRelationFilter";
import { JobTypeWhereUniqueInput } from "../jobType/JobTypeWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type JobWhereInput = {
  currentStatus?:
    | "Submitted"
    | "Accepted"
    | "Applyable"
    | "Ready"
    | "InProgress"
    | "Aborted"
    | "Interrupted"
    | "Done"
    | "Cancelled";
  description?: StringFilter;
  endDate?: DateTimeNullableFilter;
  estimatedDuration?: FloatFilter;
  id?: StringFilter;
  jobReports?: JobReportListRelationFilter;
  jobType?: JobTypeWhereUniqueInput;
  numberOfHelper?: FloatFilter;
  paidAmount?: FloatNullableFilter;
  payments?: PaymentListRelationFilter;
  pricePerHour?: FloatFilter;
  startDate?: DateTimeFilter;
  title?: StringFilter;
};
