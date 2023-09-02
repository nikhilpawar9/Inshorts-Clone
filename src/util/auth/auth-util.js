import Cookies from "js-cookie";

export const setCookieData = (data, next) => {
  Cookies.set("token", data);
  next();
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (Cookies.get("token")) {
    return Cookies.get("token");
  }
  return false;
};
