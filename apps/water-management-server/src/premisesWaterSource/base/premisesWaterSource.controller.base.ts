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
import { PremisesWaterSourceService } from "../premisesWaterSource.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PremisesWaterSourceCreateInput } from "./PremisesWaterSourceCreateInput";
import { PremisesWaterSource } from "./PremisesWaterSource";
import { PremisesWaterSourceFindManyArgs } from "./PremisesWaterSourceFindManyArgs";
import { PremisesWaterSourceWhereUniqueInput } from "./PremisesWaterSourceWhereUniqueInput";
import { PremisesWaterSourceUpdateInput } from "./PremisesWaterSourceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PremisesWaterSourceControllerBase {
  constructor(
    protected readonly service: PremisesWaterSourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PremisesWaterSource })
  @nestAccessControl.UseRoles({
    resource: "PremisesWaterSource",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PremisesWaterSourceCreateInput,
  })
  async createPremisesWaterSource(
    @common.Body() data: PremisesWaterSourceCreateInput
  ): Promise<PremisesWaterSource> {
    return await this.service.createPremisesWaterSource({
      data: {
        ...data,

        waterSourceId: data.waterSourceId
          ? {
              connect: data.waterSourceId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        premisesId: true,
        updatedAt: true,

        waterSourceId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PremisesWaterSource] })
  @ApiNestedQuery(PremisesWaterSourceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PremisesWaterSource",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async premisesWaterSources(
    @common.Req() request: Request
  ): Promise<PremisesWaterSource[]> {
    const args = plainToClass(PremisesWaterSourceFindManyArgs, request.query);
    return this.service.premisesWaterSources({
      ...args,
      select: {
        createdAt: true,
        id: true,
        premisesId: true,
        updatedAt: true,

        waterSourceId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PremisesWaterSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PremisesWaterSource",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async premisesWaterSource(
    @common.Param() params: PremisesWaterSourceWhereUniqueInput
  ): Promise<PremisesWaterSource | null> {
    const result = await this.service.premisesWaterSource({
      where: params,
      select: {
        createdAt: true,
        id: true,
        premisesId: true,
        updatedAt: true,

        waterSourceId: {
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
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PremisesWaterSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PremisesWaterSource",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PremisesWaterSourceUpdateInput,
  })
  async updatePremisesWaterSource(
    @common.Param() params: PremisesWaterSourceWhereUniqueInput,
    @common.Body() data: PremisesWaterSourceUpdateInput
  ): Promise<PremisesWaterSource | null> {
    try {
      return await this.service.updatePremisesWaterSource({
        where: params,
        data: {
          ...data,

          waterSourceId: data.waterSourceId
            ? {
                connect: data.waterSourceId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          premisesId: true,
          updatedAt: true,

          waterSourceId: {
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

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PremisesWaterSource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PremisesWaterSource",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePremisesWaterSource(
    @common.Param() params: PremisesWaterSourceWhereUniqueInput
  ): Promise<PremisesWaterSource | null> {
    try {
      return await this.service.deletePremisesWaterSource({
        where: params,
        select: {
          createdAt: true,
          id: true,
          premisesId: true,
          updatedAt: true,

          waterSourceId: {
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
