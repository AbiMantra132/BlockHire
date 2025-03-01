import CompanyImage from "./CompanyImage";
import DisplayData from "./DisplayData";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";

export default function CompanyProfile() {
  const { loading, company, logout } = useAuth();
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="w-96 bg-white rounded-xl px-4 py-6 flex flex-col justify-start items-start gap-4">
          {/* PROFILE */}
          <CompanyImage />
          {/* BIO */}
          <DisplayData title="Email" data={company.email} />
          {/* FULLNAME */}
          <DisplayData title="Field" data={company.industry} />
          {/* EMAIL */}
          <DisplayData title="Location" data={company.location} />
          {/* PORTPOLIO */}
          <DisplayData title="Website" data={company.websiteUrl} />
          {/* SKILLS */}
          <DisplayData title="Description" data={company.description} />
          {/* LOGOUT */}
          <Button title="Logout" type="ghost" onclick={logout} />
        </div>
      )}
    </>
  );
}
