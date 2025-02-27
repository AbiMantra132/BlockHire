import { Routes, Route, Navigate } from "react-router";

// Page Imports
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

function Router() {
  const { isAuth, user, loading } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    if (!user) {
      return;
    }
  }, [loading]);

  return (
    <Routes>
      <Route
        index
        element={
          isAuth ? (
            user ? (
              user.role == "Guest" ? (
                <CreateAccount />
              ) : (
                <Home />
              )
            ) : (
              <Home />
            )
          ) : (
            <Home />
          )
        }
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/createAccount" element={<CreateAccount />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
