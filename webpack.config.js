import path, { dirname } from "path";
import { fileURLToPath } from 'url';

import { config } from "./src/config.js";

const { NODE_ENV } = config;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = NODE_ENV;

const webPackConfig = {
  entry: "./src/index.js",
  target: "node",
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    scriptType: 'module',
    chunkFormat: 'module',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
};

export default () => {
  if (isProduction) {
    webPackConfig.mode = "production";
  } else {
    webPackConfig.mode = "development";
  }
  return webPackConfig;
};
