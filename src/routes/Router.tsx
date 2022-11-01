import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Login } from "../pages/Login";
import { Menu,  } from "../pages/Menu";
import { Users } from "../pages/Users";
import { Providers } from "../pages/Providers";
import { PrivateRoute } from "./PrivateRoute";

export function Router() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>

        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        
        <Route path="/users" element={<Users />} />
        <Route path="/providers" element={<Providers />} />

      </Route>

      <Route
        path="login"
        element={isAuthenticated ? <Navigate to="login" /> : <Login />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
