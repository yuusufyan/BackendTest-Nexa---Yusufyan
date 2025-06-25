import ApiError from "../configs/api-error.config";
import { AppDataSource } from "../configs/database.config";
import { loginUserDTO } from "../dtos/auth.dto";
import { Admin } from "../entities/admin.entity";
import { AdminToken } from "../entities/admin_token.entity";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { decryptAESFromHex } from "../utils/crypto.util";

const AES_KEY = process.env.CRYPTO_SECRET_KEY;
const JWT_KEY = process.env.JWT_SECRET_KEY;

export async function loginService(payload: loginUserDTO): Promise<any> {
  const entityManager = AppDataSource.manager;
  const dataAdmin = await entityManager.findOne(Admin, {
    where: {
      username: payload.username,
    },
  });

  console.log("Data Admin: ", dataAdmin)

  if (!dataAdmin) {
    throw new ApiError(404, "Data Admin Not Found");
  }

  const passwordBuffer = Buffer.from(dataAdmin.password, 'hex');

  const decryptedPassword = decryptAESFromHex(passwordBuffer);

  console.log(decryptedPassword)

  // const token = jwt.sign(
  //   { userId: dataAdmin.id, roleId: dataAdmin.username },
  //   process.env.SECRET_KEY,
  //   { expiresIn: "1d" }
  // );
}
