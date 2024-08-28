/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { B2bTransactionsService } from "../b2bTransactions.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { B2bTransactionsCreateInput } from "./B2bTransactionsCreateInput";
import { B2bTransactions } from "./B2bTransactions";
import { B2bTransactionsFindManyArgs } from "./B2bTransactionsFindManyArgs";
import { B2bTransactionsWhereUniqueInput } from "./B2bTransactionsWhereUniqueInput";
import { B2bTransactionsUpdateInput } from "./B2bTransactionsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class B2bTransactionsControllerBase {
  constructor(
    protected readonly service: B2bTransactionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: B2bTransactions })
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: B2bTransactionsCreateInput,
  })
  async createB2bTransactions(
    @common.Body() data: B2bTransactionsCreateInput
  ): Promise<B2bTransactions> {
    return await this.service.createB2bTransactions({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        paymentAccount: data.paymentAccount
          ? {
              connect: data.paymentAccount,
            }
          : undefined,
      },
      select: {
        amount: true,
        c2bTransactionId: true,
        completed: true,
        confirmed: true,
        contractNumber: true,
        conversationId: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        deletedAt: true,
        id: true,
        initiated: true,
        initiatedPayload: true,
        message: true,
        payload: true,

        paymentAccount: {
          select: {
            id: true,
          },
        },

        paymentChannelId: true,
        share: true,
        status: true,
        transactionDate: true,
        transactionFee: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [B2bTransactions] })
  @ApiNestedQuery(B2bTransactionsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async b2bTransactionsItems(
    @common.Req() request: Request
  ): Promise<B2bTransactions[]> {
    const args = plainToClass(B2bTransactionsFindManyArgs, request.query);
    return this.service.b2bTransactionsItems({
      ...args,
      select: {
        amount: true,
        c2bTransactionId: true,
        completed: true,
        confirmed: true,
        contractNumber: true,
        conversationId: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        deletedAt: true,
        id: true,
        initiated: true,
        initiatedPayload: true,
        message: true,
        payload: true,

        paymentAccount: {
          select: {
            id: true,
          },
        },

        paymentChannelId: true,
        share: true,
        status: true,
        transactionDate: true,
        transactionFee: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: B2bTransactions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async b2bTransactions(
    @common.Param() params: B2bTransactionsWhereUniqueInput
  ): Promise<B2bTransactions | null> {
    const result = await this.service.b2bTransactions({
      where: params,
      select: {
        amount: true,
        c2bTransactionId: true,
        completed: true,
        confirmed: true,
        contractNumber: true,
        conversationId: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        deletedAt: true,
        id: true,
        initiated: true,
        initiatedPayload: true,
        message: true,
        payload: true,

        paymentAccount: {
          select: {
            id: true,
          },
        },

        paymentChannelId: true,
        share: true,
        status: true,
        transactionDate: true,
        transactionFee: true,
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
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: B2bTransactions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: B2bTransactionsUpdateInput,
  })
  async updateB2bTransactions(
    @common.Param() params: B2bTransactionsWhereUniqueInput,
    @common.Body() data: B2bTransactionsUpdateInput
  ): Promise<B2bTransactions | null> {
    try {
      return await this.service.updateB2bTransactions({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          paymentAccount: data.paymentAccount
            ? {
                connect: data.paymentAccount,
              }
            : undefined,
        },
        select: {
          amount: true,
          c2bTransactionId: true,
          completed: true,
          confirmed: true,
          contractNumber: true,
          conversationId: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          deletedAt: true,
          id: true,
          initiated: true,
          initiatedPayload: true,
          message: true,
          payload: true,

          paymentAccount: {
            select: {
              id: true,
            },
          },

          paymentChannelId: true,
          share: true,
          status: true,
          transactionDate: true,
          transactionFee: true,
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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: B2bTransactions })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "B2bTransactions",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteB2bTransactions(
    @common.Param() params: B2bTransactionsWhereUniqueInput
  ): Promise<B2bTransactions | null> {
    try {
      return await this.service.deleteB2bTransactions({
        where: params,
        select: {
          amount: true,
          c2bTransactionId: true,
          completed: true,
          confirmed: true,
          contractNumber: true,
          conversationId: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          deletedAt: true,
          id: true,
          initiated: true,
          initiatedPayload: true,
          message: true,
          payload: true,

          paymentAccount: {
            select: {
              id: true,
            },
          },

          paymentChannelId: true,
          share: true,
          status: true,
          transactionDate: true,
          transactionFee: true,
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
}
