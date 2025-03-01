import { Link } from "react-router";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";

export default function Navbar() {
  const { login, isAuth, logout, user } = useAuth();

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
            <>
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
              <Button type="ghost" title="Join" onclick={login} />
            </>
          )}
          {isAuth && user && user.role == "Guest" && (
            <Button type="ghost" title="Logout" onclick={logout} />
          )}

          {isAuth && user && user.role == "Freelancer" && (
            <>
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
              <button className="bg-transparent border border-[#2F89FC] rounded-full w-8 cursor-pointer flex justify-center items-center aspect-square">
                <img
                  src="/images/freelancer/bell.svg"
                  alt="bell"
                  className="w-4"
                />
              </button>
              <Link to={"/profile"}>
                <Button type="ghost" title={user.username} />
              </Link>
            </>
          )}
        </div>
        {isAuth && !user && (
          <Button type="ghost" title="Logout" onclick={logout} />
        )}
      </div>
    </nav>
  );
}
