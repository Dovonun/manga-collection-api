import { User } from "./user";

export type UserCreationParams = Pick<User, "email" | "name">;

export class UserService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      admin: false,
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 1000),
      admin: false,
      ...userCreationParams,
    };
  }
}
