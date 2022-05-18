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
import { PaymentService } from "../payment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentCreateInput } from "./PaymentCreateInput";
import { PaymentWhereInput } from "./PaymentWhereInput";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentUpdateInput } from "./PaymentUpdateInput";
import { Payment } from "./Payment";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentControllerBase {
  constructor(
    protected readonly service: PaymentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Payment })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PaymentCreateInput): Promise<Payment> {
    return await this.service.create({
      data: {
        ...data,

        job: {
          connect: data.job,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        method: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Payment] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PaymentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Payment[]> {
    const args = plainToClass(PaymentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        method: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        job: {
          select: {
            id: true,
          },
        },

        method: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Payment",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PaymentWhereUniqueInput,
    @common.Body() data: PaymentUpdateInput
  ): Promise<Payment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          job: {
            connect: data.job,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,

          job: {
            select: {
              id: true,
            },
          },

          method: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
    resource: "Payment",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Payment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PaymentWhereUniqueInput
  ): Promise<Payment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,

          job: {
            select: {
              id: true,
            },
          },

          method: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
}
