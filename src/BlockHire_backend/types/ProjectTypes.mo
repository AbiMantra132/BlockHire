import HashMap "mo:base/HashMap";
import Text "mo:base/Text";


module {
  public type Projects = HashMap.HashMap<Principal, Project>;

  // PROJECT TYPE
  public type Project = {
    id : Principal;
    title : Text;
    description : Text;
    skills : [Text];
    budget : Nat;
    deadline : Nat;
    owner : Principal;
    status : Text;
  };

  public type ProjectWallet = {
    id : Principal;
    projectId : Principal;
    balance : Nat;
  }

  
}
