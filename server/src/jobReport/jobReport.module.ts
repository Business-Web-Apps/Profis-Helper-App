import { Module } from "@nestjs/common";
import { JobReportModuleBase } from "./base/jobReport.module.base";
import { JobReportService } from "./jobReport.service";
import { JobReportController } from "./jobReport.controller";
import { JobReportResolver } from "./jobReport.resolver";

@Module({
  imports: [JobReportModuleBase],
  controllers: [JobReportController],
  providers: [JobReportService, JobReportResolver],
  exports: [JobReportService],
})
export class JobReportModule {}
