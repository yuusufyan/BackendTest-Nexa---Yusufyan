import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { ConnectOptions, DataSource } from "typeorm";
import { AdminToken } from "../entities/admin_token.entity";
import { Admin } from "../entities/admin.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql", // ✅ INI VALID di DataSourceOptions
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Admin, AdminToken],
  synchronize: false,
  logging: false,
});
