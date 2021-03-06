/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, JobReport, Job } from "@prisma/client";

export class JobReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportFindManyArgs>
  ): Promise<number> {
    return this.prisma.jobReport.count(args);
  }

  async findMany<T extends Prisma.JobReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportFindManyArgs>
  ): Promise<JobReport[]> {
    return this.prisma.jobReport.findMany(args);
  }
  async findOne<T extends Prisma.JobReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportFindUniqueArgs>
  ): Promise<JobReport | null> {
    return this.prisma.jobReport.findUnique(args);
  }
  async create<T extends Prisma.JobReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportCreateArgs>
  ): Promise<JobReport> {
    return this.prisma.jobReport.create<T>(args);
  }
  async update<T extends Prisma.JobReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportUpdateArgs>
  ): Promise<JobReport> {
    return this.prisma.jobReport.update<T>(args);
  }
  async delete<T extends Prisma.JobReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobReportDeleteArgs>
  ): Promise<JobReport> {
    return this.prisma.jobReport.delete(args);
  }

  async getJob(parentId: string): Promise<Job | null> {
    return this.prisma.jobReport
      .findUnique({
        where: { id: parentId },
      })
      .job();
  }
}
