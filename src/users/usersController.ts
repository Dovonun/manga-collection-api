import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Response,
  Route,
  SuccessResponse,
} from "tsoa";

import { User } from "./user";
import { UserService, UserCreationParams } from "./usersService";

type A = { msg: "hi"; details: { [name: string]: unknown } };

@Route("users")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<User> {
    return new UserService().get(userId, name);
  }

  @Response<A>(409, "hetepetete")
  @SuccessResponse("201", "Created")
  @Post()
  public async creatUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new UserService().create(requestBody);
    console.log(requestBody);
    return;
  }
}
