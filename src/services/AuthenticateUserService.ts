import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email
      }, "9deebe9e43685158b2e37f2336175a5f",
      {
        subject: user.id,
        expiresIn: "1d"
      });

    console.log("S Token: ", token);

    return token;
  }
}

export { AuthenticateUserService }