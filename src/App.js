import React from "react";
import { AuthContextProvider } from "@context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@routes";

const App = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        {Object.values(routes).map((route) => {
          const Component = route.component;
          return <Route key={route.path} path={route.path} element={<Component />} />;
        })}
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
