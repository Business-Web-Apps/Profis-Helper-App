import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobReportServiceBase } from "./base/jobReport.service.base";

@Injectable()
export class JobReportService extends JobReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
