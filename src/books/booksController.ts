import {
  // Body,
  Controller,
  Get,
  Path,
  // Post,
  // Query,
  Route,
  // SuccessResponse,
} from "tsoa";

import { Book } from "./book";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Route("books")
export class BookController extends Controller {
  @Get("{isbn}")
  public async getUser(@Path() isbn: string): Promise<Book> {
    const book = await prisma.books.findUnique({ where: { isbn } });

    if (book) return book;
    return { isbn: "hi", name: "by" };
  }

  // @SuccessResponse("201", "Created")
  // @Post()
  // public async creatUser(
  //   @Body() requestBody: UserCreationParams
  // ): Promise<void> {
  //   this.setStatus(201);
  //   new UserService().create(requestBody);
  //   return;
  // }
}
