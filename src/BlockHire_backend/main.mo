import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Result "mo:base/Result";

// SERVICES
import UserService "services/UserService";

// TYPES
import UserTypes "types/UserTypes";
import FreeLancerTypes "types/FreeLancerTypes";
import CompanyTypes "types/CompanyTypes";

actor class BlockHire() = this {
  // DATA
   private var users : UserTypes.Users = HashMap.HashMap<Principal, UserTypes.User>(
    10,
    Principal.equal,
    Principal.hash,
  );
   private var freelancers : FreeLancerTypes.FreeLancers = HashMap.HashMap<Principal, FreeLancerTypes.FreeLancer>(
    10,
    Principal.equal,
    Principal.hash,
  );
   private var companies : CompanyTypes.Companies = HashMap.HashMap<Principal, CompanyTypes.Company>(
    10,
    Principal.equal,
    Principal.hash,
  );

  // DATA ENTRIES
  private stable var usersEntries : [(Principal, UserTypes.User)] = [];
  private stable var freelancersEntries : [(Principal, FreeLancerTypes.FreeLancer)] = [];
  private stable var companiesEntries : [(Principal, CompanyTypes.Company)] = [];

  // PREUPGRADE & POSTUPGRADE FUNC TO KEEP DATA
  system func preupgrade() {
    usersEntries := Iter.toArray(users.entries());
    freelancersEntries := Iter.toArray(freelancers.entries());
    companiesEntries := Iter.toArray(companies.entries());
  };

  system func postupgrade() {
    users := HashMap.fromIter<Principal, UserTypes.User>(usersEntries.vals(), 0, Principal.equal, Principal.hash);
    usersEntries := [];
    freelancers := HashMap.fromIter<Principal, FreeLancerTypes.FreeLancer>(freelancersEntries.vals(), 0, Principal.equal, Principal.hash);
    freelancersEntries := [];
    companies := HashMap.fromIter<Principal, CompanyTypes.Company>(companiesEntries.vals(), 0, Principal.equal, Principal.hash);
    companiesEntries := [];
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
