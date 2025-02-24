import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import ProjectTypes "ProjectTypes";

module {
  public type Companies = HashMap.HashMap<Principal, Company>;

  // COMPANY TYPE
  public type Company = {
    id : Text; 
    profile: Text;
    companyName : Text;
    walletAddress : Text;
    email : Text;
    industry : Text; // Industry category (e.g., Fintech, Healthtech)
    location : ?Text;
    websiteUrl : ?Text;
    description : ?Text; 
    openProjects : ?[ProjectTypes.Project]; 
    completedProjects : ?[ProjectTypes.Project];
    joinedAt : Text;
    updatedAt : Text;
  };
};
