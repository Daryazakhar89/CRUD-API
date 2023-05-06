import cluster from "cluster";
import { createServer } from "http";
import os from "os";
import process from "process";

import { config } from "./config.js";

const { PORT } = config;

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master process with PID ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} exited with code ${code} and signal ${signal}`
    );
  });
} else {
  const server = createServer((req, res) => {
    res.writeHead(200);
    res.end(`Worker ${process.pid} handled request`);
  });

  server.listen(+PORT + +cluster.worker.id, () => {
    console.log(
      `Worker ${process.pid} is listening on port ${+PORT + +cluster.worker.id}`
    );
  });
}
