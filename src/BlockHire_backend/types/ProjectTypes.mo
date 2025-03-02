import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";


module {
  public type Projects = HashMap.HashMap<Text, Project>;
  public type Submissions = HashMap.HashMap<Text, Submission>;

  // Type Project
  public type Project = {
    projectId : Text;
    companyId : Principal;
    title : Text;
    description : Text;
    requiredSkills : [Text];
    scope : Text;
    freelancer_amount : Nat;
    level : Text;
    budget : Nat; // Total budget for the project
    deadline : Text;
    status : Text;
    freelancerNeeded : Nat;
    freelancer : ?[Principal]; // Freelancer IDs
    applicants : ?[Principal]; // Applicants IDs
    createdAt : Text;
    submission : Text ; // URL atau deskripsi submission
    freelancerApproved : Bool;
    companyApproved : Bool;
  };

  public type Submission = {
    submissionId : Text;
    projectId : Text;
    freelancerId : Principal;
    companyId : Principal;
    status : Text;
    owner : Principal;
    submission : Text;
  };
}
