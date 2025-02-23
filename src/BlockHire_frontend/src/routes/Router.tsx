import { Routes, Route, Navigate } from "react-router";

// Page Imports
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

function Router() {
  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      return;
    }
  }, [loading]);

  return (
    <Routes>
      <Route index element={<Home />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}></Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
