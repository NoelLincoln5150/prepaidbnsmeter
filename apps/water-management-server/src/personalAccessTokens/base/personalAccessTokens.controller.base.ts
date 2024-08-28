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
import { PersonalAccessTokensService } from "../personalAccessTokens.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PersonalAccessTokensCreateInput } from "./PersonalAccessTokensCreateInput";
import { PersonalAccessTokens } from "./PersonalAccessTokens";
import { PersonalAccessTokensFindManyArgs } from "./PersonalAccessTokensFindManyArgs";
import { PersonalAccessTokensWhereUniqueInput } from "./PersonalAccessTokensWhereUniqueInput";
import { PersonalAccessTokensUpdateInput } from "./PersonalAccessTokensUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PersonalAccessTokensControllerBase {
  constructor(
    protected readonly service: PersonalAccessTokensService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PersonalAccessTokens })
  @nestAccessControl.UseRoles({
    resource: "PersonalAccessTokens",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PersonalAccessTokensCreateInput,
  })
  async createPersonalAccessTokens(
    @common.Body() data: PersonalAccessTokensCreateInput
  ): Promise<PersonalAccessTokens> {
    return await this.service.createPersonalAccessTokens({
      data: data,
      select: {
        abilities: true,
        createdAt: true,
        expiresAt: true,
        id: true,
        lastUsedAt: true,
        name: true,
        token: true,
        tokenableId: true,
        tokenableType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PersonalAccessTokens] })
  @ApiNestedQuery(PersonalAccessTokensFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PersonalAccessTokens",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async personalAccessTokensItems(
    @common.Req() request: Request
  ): Promise<PersonalAccessTokens[]> {
    const args = plainToClass(PersonalAccessTokensFindManyArgs, request.query);
    return this.service.personalAccessTokensItems({
      ...args,
      select: {
        abilities: true,
        createdAt: true,
        expiresAt: true,
        id: true,
        lastUsedAt: true,
        name: true,
        token: true,
        tokenableId: true,
        tokenableType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PersonalAccessTokens })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PersonalAccessTokens",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async personalAccessTokens(
    @common.Param() params: PersonalAccessTokensWhereUniqueInput
  ): Promise<PersonalAccessTokens | null> {
    const result = await this.service.personalAccessTokens({
      where: params,
      select: {
        abilities: true,
        createdAt: true,
        expiresAt: true,
        id: true,
        lastUsedAt: true,
        name: true,
        token: true,
        tokenableId: true,
        tokenableType: true,
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
  @swagger.ApiOkResponse({ type: PersonalAccessTokens })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PersonalAccessTokens",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PersonalAccessTokensUpdateInput,
  })
  async updatePersonalAccessTokens(
    @common.Param() params: PersonalAccessTokensWhereUniqueInput,
    @common.Body() data: PersonalAccessTokensUpdateInput
  ): Promise<PersonalAccessTokens | null> {
    try {
      return await this.service.updatePersonalAccessTokens({
        where: params,
        data: data,
        select: {
          abilities: true,
          createdAt: true,
          expiresAt: true,
          id: true,
          lastUsedAt: true,
          name: true,
          token: true,
          tokenableId: true,
          tokenableType: true,
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
  @swagger.ApiOkResponse({ type: PersonalAccessTokens })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PersonalAccessTokens",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePersonalAccessTokens(
    @common.Param() params: PersonalAccessTokensWhereUniqueInput
  ): Promise<PersonalAccessTokens | null> {
    try {
      return await this.service.deletePersonalAccessTokens({
        where: params,
        select: {
          abilities: true,
          createdAt: true,
          expiresAt: true,
          id: true,
          lastUsedAt: true,
          name: true,
          token: true,
          tokenableId: true,
          tokenableType: true,
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
