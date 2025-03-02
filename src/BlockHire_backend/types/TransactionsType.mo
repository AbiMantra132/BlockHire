import Hashmap "mo:base/HashMap";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";

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
}