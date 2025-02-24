import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Result "mo:base/Result";

// SERVICES
import UserService "services/UserService";

// TYPES
import UserTypes "types/UserTypes";

actor class BlockHire() = this {
  // DATA
   private var users : UserTypes.Users = HashMap.HashMap<Principal, UserTypes.User>(
    10,
    Principal.equal,
    Principal.hash,
  );

  // DATA ENTRIES
  private stable var usersEntries : [(Principal, UserTypes.User)] = [];

  // PREUPGRADE & POSTUPGRADE FUNC TO KEEP DATA
  system func preupgrade() {
    usersEntries := Iter.toArray(users.entries());
  };

  system func postupgrade() {
    users := HashMap.fromIter<Principal, UserTypes.User>(usersEntries.vals(), 0, Principal.equal, Principal.hash);
    usersEntries := [];
  };


  // USER
  public query (message) func getPrincipal() : async Principal {
    message.caller;
  };

  public shared (msg) func createUser(
    walletAddress : Text
  ) : async Result.Result<UserTypes.User, Text> {
    return await UserService.createUser(users, msg.caller, walletAddress);
  };
};
