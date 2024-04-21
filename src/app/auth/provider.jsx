"use client"; //

import React, { useEffect, useState } from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useSignOut from "react-auth-kit/hooks/useSignOut";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();
  const signOut = useSignOut();
  const signIn = useSignIn();
  const [mounted, setMounted] = useState(false);

  // Sign In
  const onSignIn = React.useCallback(
    ({ auth: { token }, user }) => {
      const isSignedIn = signIn({ auth: { token }, userState: user });

      if (isSignedIn) {
        window.location.href = "/dashboard";
      }
    },
    [signIn]
  );

  // Signout

  const onSignOut = React.useCallback(() => {
    const logout = signOut();

    if (logout) {
      window.location.href = "/sign-in";
    }
  }, [signOut]);

  const value = {
    isAuth: isAuthenticated,
    authUser,
    signOut: onSignOut,
    signIn: onSignIn,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

/**
 *
 * @returns {{isAuth:boolean,signIn:({auth:{token:string},user:{}})=>void,signOut:()=>void,authUser:{id:string,name:string,profileImage:{}}}}
 */
export const useAuth = () => React.useContext(AuthContext);