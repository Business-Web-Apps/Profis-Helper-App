import { JobReport as TJobReport } from "../api/jobReport/JobReport";

export const JOBREPORT_TITLE_FIELD = "title";

export const JobReportTitle = (record: TJobReport): string => {
  return record.title || record.id;
};
