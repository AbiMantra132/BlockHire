import { Routes, Route, Navigate } from "react-router";

// Page Imports
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";
import FreelancerHome from "../pages/FreelancerHome";
import DetailProject from "../pages/DetailProject";
import Profile from "../pages/Profile";

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
              ) : user.role == "Freelancer" ? (
                <FreelancerHome />
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

      <Route path="/project" element={<DetailProject />} />
      <Route path="/profile" element={<Profile />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/createAccount" element={<CreateAccount />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
