import EnvUtil from "../utils/env.util";

const appConfig = {
  nodeEnv: EnvUtil.getEnv(process.env.NODE_ENV, "development"),

  // Server config
  serverUrl: EnvUtil.getEnv(
    process.env.NEXT_PUBLIC_SERVER_URL,
    "http://localhost:3000",
  ),
};

export default appConfig;
