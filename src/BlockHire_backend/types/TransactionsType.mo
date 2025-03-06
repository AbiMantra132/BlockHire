import Hashmap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import FreeLancerTypes "FreeLancerTypes";
import ProjectTypes "ProjectTypes";

module {
  public type Transactions = Hashmap.HashMap<Text, Transaction>;

   public type Transaction = {
    id : Text;
    from : Principal;
    to : Principal;
    amount : Nat;
    projectId : Text;
    timestamp : Text;
  };

  public type CompanyDetailProject = {
    companyId : Principal;
    totalSpending : Nat;
    activeFreelancer : Nat;
    totalProject : Nat;
    pendingRequest : Nat;
    completedProject : Nat;
    listFreelancer : [FreeLancerTypes.FreeLancer];
  };

  public type FreelancerDetailProject = {
    freelancerId : Principal;
    totalEarning : Nat;
    activeProject : Nat;
    pendingPayment : Nat;
    myProject : [ProjectTypes.Project];
  }
}