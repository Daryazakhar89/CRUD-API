import { createServer } from "http";
import { config } from "./config.js";

import userRouter from "./routes/UserRouter.js";

const { PORT } = config;

const server = createServer(userRouter.handleRequest.bind(userRouter));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
