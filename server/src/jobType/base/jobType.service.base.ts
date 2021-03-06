/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, JobType, Job } from "@prisma/client";

export class JobTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.jobType.count(args);
  }

  async findMany<T extends Prisma.JobTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeFindManyArgs>
  ): Promise<JobType[]> {
    return this.prisma.jobType.findMany(args);
  }
  async findOne<T extends Prisma.JobTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeFindUniqueArgs>
  ): Promise<JobType | null> {
    return this.prisma.jobType.findUnique(args);
  }
  async create<T extends Prisma.JobTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeCreateArgs>
  ): Promise<JobType> {
    return this.prisma.jobType.create<T>(args);
  }
  async update<T extends Prisma.JobTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeUpdateArgs>
  ): Promise<JobType> {
    return this.prisma.jobType.update<T>(args);
  }
  async delete<T extends Prisma.JobTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobTypeDeleteArgs>
  ): Promise<JobType> {
    return this.prisma.jobType.delete(args);
  }

  async findJobs(
    parentId: string,
    args: Prisma.JobFindManyArgs
  ): Promise<Job[]> {
    return this.prisma.jobType
      .findUnique({
        where: { id: parentId },
      })
      .jobs(args);
  }
}
