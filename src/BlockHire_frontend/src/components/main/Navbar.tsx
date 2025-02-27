import { Link } from "react-router";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";

export default function Navbar() {
  const { login, isAuth, logout } = useAuth();
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-center items-center bg-[#E5F0F9] z-50">
      <div className="w-full container px-8 py-6 bg-transparent flex flex-row justify-between items-center">
        {/* LOGO */}
        <div className="w-fit overflow-hidden flex justify-center items-center">
          <Link to="/">
            <img src="logo.svg" alt="logo" className="h-5" />
          </Link>
        </div>
        {/* NAVIGATION */}
        <div className="flex flex-row justify-end items-center gap-4">
          {/* SECTIONS */}
          {!isAuth && (
            <div className="flex flex-row justify-end items-center gap-4">
              <Link to={""} className="text-black opacity-70 text-sm">
                Find Projects
              </Link>
              <Link to={""} className="text-black opacity-70 text-sm">
                How It Works
              </Link>
              <Link to={""} className="text-black opacity-70 text-sm">
                About Us
              </Link>
              <Link to={""} className="text-black opacity-70 text-sm">
                Premium Services
              </Link>
            </div>
          )}
          {isAuth ? (
            <Button type="ghost" title="Logout" onclick={logout} />
          ) : (
            <Button type="ghost" title="Join" onclick={login} />
          )}
        </div>
      </div>
    </nav>
  );
}
