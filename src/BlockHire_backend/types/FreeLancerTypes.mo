import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";

module {
  public type FreeLancers = HashMap.HashMap<Principal, FreeLancer>;

  // FREELANCER TYPE
  type FreeLancer = {
    id : Principal;
    fullName : Text;
    email : Text;
    username : Text;
    walletAddress : Text;
    profile : Text;
    bio : ?Text;
    skills : Text;
    portfolioLinks : ?[Text];
    hourlyRate : ?Nat;
    languages : Text;
    availabilityStatus : Text;
    joinedAt : Text;
    updatedAt : Text;
  };

};
