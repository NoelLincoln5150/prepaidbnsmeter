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
import { PremisesService } from "../premises.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PremisesCreateInput } from "./PremisesCreateInput";
import { Premises } from "./Premises";
import { PremisesFindManyArgs } from "./PremisesFindManyArgs";
import { PremisesWhereUniqueInput } from "./PremisesWhereUniqueInput";
import { PremisesUpdateInput } from "./PremisesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PremisesControllerBase {
  constructor(
    protected readonly service: PremisesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Premises })
  @nestAccessControl.UseRoles({
    resource: "Premises",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PremisesCreateInput,
  })
  async createPremises(
    @common.Body() data: PremisesCreateInput
  ): Promise<Premises> {
    return await this.service.createPremises({
      data: data,
      select: {
        contractNumber: true,
        county: true,
        createdAt: true,
        elevation: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        phoneNumber: true,
        region: true,
        subCounty: true,
        supplierNumber: true,
        town: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Premises] })
  @ApiNestedQuery(PremisesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Premises",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async premisesItems(@common.Req() request: Request): Promise<Premises[]> {
    const args = plainToClass(PremisesFindManyArgs, request.query);
    return this.service.premisesItems({
      ...args,
      select: {
        contractNumber: true,
        county: true,
        createdAt: true,
        elevation: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        phoneNumber: true,
        region: true,
        subCounty: true,
        supplierNumber: true,
        town: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Premises })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Premises",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async premises(
    @common.Param() params: PremisesWhereUniqueInput
  ): Promise<Premises | null> {
    const result = await this.service.premises({
      where: params,
      select: {
        contractNumber: true,
        county: true,
        createdAt: true,
        elevation: true,
        id: true,
        latitude: true,
        location: true,
        longitude: true,
        phoneNumber: true,
        region: true,
        subCounty: true,
        supplierNumber: true,
        town: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: Premises })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Premises",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PremisesUpdateInput,
  })
  async updatePremises(
    @common.Param() params: PremisesWhereUniqueInput,
    @common.Body() data: PremisesUpdateInput
  ): Promise<Premises | null> {
    try {
      return await this.service.updatePremises({
        where: params,
        data: data,
        select: {
          contractNumber: true,
          county: true,
          createdAt: true,
          elevation: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          phoneNumber: true,
          region: true,
          subCounty: true,
          supplierNumber: true,
          town: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: Premises })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Premises",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePremises(
    @common.Param() params: PremisesWhereUniqueInput
  ): Promise<Premises | null> {
    try {
      return await this.service.deletePremises({
        where: params,
        select: {
          contractNumber: true,
          county: true,
          createdAt: true,
          elevation: true,
          id: true,
          latitude: true,
          location: true,
          longitude: true,
          phoneNumber: true,
          region: true,
          subCounty: true,
          supplierNumber: true,
          town: true,
          typeField: true,
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
