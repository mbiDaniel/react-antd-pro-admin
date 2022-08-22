import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import { routes } from "@routes";
// function loginClient(user) {
//   return apiClient({
//     method: "post",
//     url: "/login",
//     data: user,
//   });
// }

const authContext = createContext();

export function AuthContextProvider({ children }) {
  const context = {
    auth: useAuthContext(),
  };
  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

function useAuthContext() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const reducer = (prevState, action) => ({ ...prevState, ...action });
  const [auth, setAuth] = useReducer(reducer, {
    user: { token, name },
    isAuthenticated: true,
    loading: false,
    error: null,
  });

  const loginUser = async (user) => {
    setAuth({ loading: true, user: {}, error: null });

  };

  const logoutUser = () => {
    localStorage.clear();
    setAuth({ user: null, isAuthenticated: false, error: null });
    window.location.replace(routes.Login.path);
  };
  return { ...auth, loginUser, logoutUser };
}

