import { Routes, Route, Navigate } from "react-router";
import { useMemo } from "react";
import { useAuth } from "../hooks/AuthProvider";

// Page Imports
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import ProtectedRoute from "./ProtectedRoute";
import FreelancerHome from "../pages/FreelancerHome";
import DetailProject from "../pages/DetailProject";
import Profile from "../pages/Profile";
import CompanyHome from "../pages/CompanyHome";

function Router() {
  const { isAuth, user } = useAuth();

  // Menentukan halaman utama berdasarkan role user
  const mainPage = useMemo(() => {
    if (!isAuth || !user) return <Home />;

    switch (user?.role) {
      case "Guest":
        return <CreateAccount />;
      case "Freelancer":
        return <FreelancerHome />;
      case "Company":
        return <CompanyHome />;
      default:
        return <Home />;
    }
  }, [isAuth, user]);

  return (
    <Routes>
      {/* Halaman Utama */}
      <Route index element={mainPage} />

      {/* Rute Freelancer */}
      <Route
        path="/project"
        element={
          user?.role === "Freelancer" ? <DetailProject /> : <Navigate to="/" />
        }
      />
      <Route
        path="/profile"
        element={
          user?.role === "Freelancer" ? <Profile /> : <Navigate to="/" />
        }
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/createAccount" element={<CreateAccount />} />
      </Route>

      {/* Redirect untuk rute yang tidak ditemukan */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
