const HOST = "192.168.1.105";
const PORT = "9090";
const BASE_URL = "http://" + HOST + ":" + PORT;

export const environment = {
  production: true,
  LOGIN_URL:  BASE_URL + "/erp/auth/login?userType=",
  REFRESH_TOKEN_URL: BASE_URL + "/erp/auth/refresh/token"
};
