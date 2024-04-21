"use client";

import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit/AuthProvider";
const store = createStore({
  authName: "token",
  authType: "cookie",
  cookieDomain: typeof window !== "undefined" ? window.location.hostname : "",
  cookieSecure:
    typeof window !== "undefined"
      ? window.location.protocol !== "http:"
      : false,
});

export default function Provider({ children }) {
  return <AuthProvider store={store}>{children}</AuthProvider>;
}