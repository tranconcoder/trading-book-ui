import appConfig from "./app.config";

const authConfig = {
  googleOauth: {
    loginUrl: `${appConfig.serverUrl}/auth/google`,
  },
};

export default authConfig;
