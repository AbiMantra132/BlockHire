import ProfileImage from "./ProfileImage";
import DisplayData from "./DisplayData";
import { useAuth } from "../../hooks/AuthProvider";

export default function UserProfile() {
  const { freelancer } = useAuth();
  return (
    <div className="w-96 bg-white rounded-xl px-4 py-6 flex flex-col justify-start items-start gap-4">
      {/* PROFILE */}
      <ProfileImage />
      {/* BIO */}
      <DisplayData title="Bio" data={freelancer.bio} />
      {/* FULLNAME */}
      <DisplayData title="Fullname" data={freelancer.username} />
      {/* EMAIL */}
      <DisplayData title="Email" data={freelancer.email} />
      {/* PORTPOLIO */}
      <DisplayData title="Portofolio" data={freelancer.portfolioLinks} />
      {/* SKILLS */}
      <DisplayData title="Skills" data={freelancer.skills} />
    </div>
  );
}
