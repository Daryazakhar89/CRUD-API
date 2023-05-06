import { createServer } from "http";
import { config } from "./config.js";

import userRouter from "./routes/UserRouter.js";

const { PORT } = config;

const serverErrorHandler = (res) => {
  res.statusCode = 500;
  res.write("Something was wrong on server side");
  res.end();
};

export default async () => {
  const responseHandler = async (req, res) => {
    try {
      await userRouter.handleRequest(req, res);
    } catch (err) {
      serverErrorHandler(res);
    }
  };
  const server = createServer(responseHandler);

  return await new Promise((res, rej) => {
    server.listen(PORT, async () => {
      console.log(`Server is listening on port ${PORT}`);
      res(server);
    });
  })
};
