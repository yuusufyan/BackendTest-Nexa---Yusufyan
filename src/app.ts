import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./configs/database.config";
import { createConnection } from "typeorm";
import { logging } from "./utils/logging.util";
import authRouter from "./routes/auth.route";
import { ResponseHandler } from "./middlewares/response.middleware";

dotenv.config();

const app = express();
const port: number = Number(process.env.APP_PORT) || 3000;

// app.use(bodyParser.json());
// app.use(cors());
app.use(ResponseHandler);

app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server jalan di port ${port} 🚀`);
// });

AppDataSource.initialize()
  .then(() => {
    logging.info("Database connection established");
    app.listen(port, () => {
      logging.info(`Server running on http://${process.env.APP_HOST}:${port}`);
    });
    app.use("/auth", authRouter);
  })
  .catch((e) => {
    logging.error(`Unable to connect to database: ${e}`);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("🔥 Hello from Express + TypeScript!");
});


export default app;
