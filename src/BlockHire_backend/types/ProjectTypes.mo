import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";


module {
  public type Projects = HashMap.HashMap<Principal, Project>;

  // Type Project
  public type Project = {
      projectId : Principal;
      companyId : Principal;
      title : Text;
      description : Text;
      requiredSkills : [Text];
      budget : Nat; // Total budget for the project
      deadline : Text;
      status : Text;
      applicants : [Principal]; // Freelancer IDs
      hiredFreelancerId : ?Text; // ID of hired freelancer
      wallet: ProjectWallet;
      createdAt : Text;
      updatedAt : Text;
  };

  public type ProjectWallet = {
    id : Principal;
    projectId : Principal;
    balance : Nat;
  }
}
