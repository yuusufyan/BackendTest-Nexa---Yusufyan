import { Request, Response } from "express";
import { loginUserDTO } from "../dtos/auth.dto";
import { loginService } from "../services/auth.service";
import { ValidationError } from "joi";
import ApiError from "../configs/api-error.config";

export async function loginController(req: Request, res: Response) {
  try {
    const body = req.body as loginUserDTO;
    const data = await loginService(body);

    return res.success("Login Successfully", data);
  } catch (error) {
    if (error instanceof ApiError) {
      res.error(error.status, error.message);
    } else if (error instanceof ValidationError) {
      const errorMessages = error.details.map((err) => err.message);
      console.log(error);
      res.error(400, errorMessages);
    } else {
      console.log(error);
      res.error(500, "Internal Server Error");
    }
  }
}
