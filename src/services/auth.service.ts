import { getManager } from "typeorm";
import { AppDataSource } from "../configs/database.config";
import { loginUserDTO } from "../dtos/auth.dto";
import { Admin } from "../entities/admin.entity";
import { AdminToken } from "../entities/admin_token.entity";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const AES_KEY = process.env.CRYPTO_SECRET_KEY;
const JWT_KEY = process.env.JWT_SECRET_KEY;

export async function loginService(payload: loginUserDTO): Promise<any> {
  const entityManager = getManager();
  const dataAdmin = await entityManager.findOne(Admin, {
    where: {
      username: payload.username,
    },
  });

  console.log(dataAdmin)
}
