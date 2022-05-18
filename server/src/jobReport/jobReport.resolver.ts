import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JobReportResolverBase } from "./base/jobReport.resolver.base";
import { JobReport } from "./base/JobReport";
import { JobReportService } from "./jobReport.service";

@graphql.Resolver(() => JobReport)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobReportResolver extends JobReportResolverBase {
  constructor(
    protected readonly service: JobReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
