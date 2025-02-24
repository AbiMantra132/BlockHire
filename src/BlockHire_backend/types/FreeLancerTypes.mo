import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";

module {
  public type FreeLancers = HashMap.HashMap<Principal, FreeLancer>;

  // FREELANCER TYPE
  type FreeLancer = {
    id : Principal;
    username : Text;
    walletAddress : Text;
    profile : Text;
    skills : [Text];
    balance : Nat;
  };

  type Freelancer = {
    id : Principal; 
    fullName : Text;
    email : Text;
    username : Text;
    bio : ?Text;
    skills : Text; 
    portfolioLinks: ?[Text]; 
    hourlyRate: ?Nat; 
    reviews: ?[Review]; 
    languages : Text; 
    availabilityStatus : Text;
    joinedAt : Text;
    updatedAt : Text;
  };

  type Review = {
    id : Principal;
    reviewer : Principal;
    reviewee : Principal;
    rating : Nat;
    comment : Text;
  }; 
};
