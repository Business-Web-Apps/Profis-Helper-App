import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobReportService } from "./jobReport.service";
import { JobReportControllerBase } from "./base/jobReport.controller.base";

@swagger.ApiTags("jobReports")
@common.Controller("jobReports")
export class JobReportController extends JobReportControllerBase {
  constructor(
    protected readonly service: JobReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
