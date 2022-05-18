/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JobService } from "../job.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JobCreateInput } from "./JobCreateInput";
import { JobWhereInput } from "./JobWhereInput";
import { JobWhereUniqueInput } from "./JobWhereUniqueInput";
import { JobFindManyArgs } from "./JobFindManyArgs";
import { JobUpdateInput } from "./JobUpdateInput";
import { Job } from "./Job";
<<<<<<< HEAD
import { JobReportFindManyArgs } from "../../jobReport/base/JobReportFindManyArgs";
import { JobReport } from "../../jobReport/base/JobReport";
import { JobReportWhereUniqueInput } from "../../jobReport/base/JobReportWhereUniqueInput";
=======
>>>>>>> main
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobControllerBase {
  constructor(
    protected readonly service: JobService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Job })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: JobCreateInput): Promise<Job> {
    return await this.service.create({
<<<<<<< HEAD
      data: {
        ...data,

        jobType: data.jobType
          ? {
              connect: data.jobType,
            }
          : undefined,
      },
=======
      data: data,
>>>>>>> main
      select: {
        createdAt: true,
        currentStatus: true,
        description: true,
        endDate: true,
        estimatedDuration: true,
        id: true,
<<<<<<< HEAD

        jobType: {
          select: {
            id: true,
          },
        },

=======
        jobType: true,
>>>>>>> main
        numberOfHelper: true,
        paidAmount: true,
        pricePerHour: true,
        startDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Job] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Job[]> {
    const args = plainToClass(JobFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        currentStatus: true,
        description: true,
        endDate: true,
        estimatedDuration: true,
        id: true,
<<<<<<< HEAD

        jobType: {
          select: {
            id: true,
          },
        },

=======
        jobType: true,
>>>>>>> main
        numberOfHelper: true,
        paidAmount: true,
        pricePerHour: true,
        startDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Job | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        currentStatus: true,
        description: true,
        endDate: true,
        estimatedDuration: true,
        id: true,
<<<<<<< HEAD

        jobType: {
          select: {
            id: true,
          },
        },

=======
        jobType: true,
>>>>>>> main
        numberOfHelper: true,
        paidAmount: true,
        pricePerHour: true,
        startDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() data: JobUpdateInput
  ): Promise<Job | null> {
    try {
      return await this.service.update({
        where: params,
<<<<<<< HEAD
        data: {
          ...data,

          jobType: data.jobType
            ? {
                connect: data.jobType,
              }
            : undefined,
        },
=======
        data: data,
>>>>>>> main
        select: {
          createdAt: true,
          currentStatus: true,
          description: true,
          endDate: true,
          estimatedDuration: true,
          id: true,
<<<<<<< HEAD

          jobType: {
            select: {
              id: true,
            },
          },

=======
          jobType: true,
>>>>>>> main
          numberOfHelper: true,
          paidAmount: true,
          pricePerHour: true,
          startDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Job })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobWhereUniqueInput
  ): Promise<Job | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          currentStatus: true,
          description: true,
          endDate: true,
          estimatedDuration: true,
          id: true,
<<<<<<< HEAD

          jobType: {
            select: {
              id: true,
            },
          },

=======
          jobType: true,
>>>>>>> main
          numberOfHelper: true,
          paidAmount: true,
          pricePerHour: true,
          startDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
<<<<<<< HEAD

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobReport",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/jobReports")
  @ApiNestedQuery(JobReportFindManyArgs)
  async findManyJobReports(
    @common.Req() request: Request,
    @common.Param() params: JobWhereUniqueInput
  ): Promise<JobReport[]> {
    const query = plainToClass(JobReportFindManyArgs, request.query);
    const results = await this.service.findJobReports(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        jobStatus: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/jobReports")
  async connectJobReports(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: JobReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobReports: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/jobReports")
  async updateJobReports(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: JobReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobReports: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/jobReports")
  async disconnectJobReports(
    @common.Param() params: JobWhereUniqueInput,
    @common.Body() body: JobReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobReports: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
=======
>>>>>>> main
}
