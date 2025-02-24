import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

module{
  public type Users = HashMap.HashMap<Principal, User>;

  // USER TYPE
  public type User = {
    id : Principal;
    username : Text;
    walletAddress : Text;
    profile: Text;
    role: Text;
  }; 
};

