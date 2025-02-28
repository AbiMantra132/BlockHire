import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Result "mo:base/Result";

// SERVICES
import UserService "services/UserService";
import FreelancerService "services/FreelancerService";
import CompanyService "services/CompanyService";

// TYPES
import UserTypes "types/UserTypes";
import FreeLancerTypes "types/FreeLancerTypes";
import CompanyTypes "types/CompanyTypes";
import ProjectTypes "types/ProjectTypes";

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

  public shared func queryUser(userId : Principal) : async Result.Result<UserTypes.User, Text> {
    switch(users.get(userId)){
      case(?userExist){
        return #ok userExist;
      };
      case (null){
        return #err "User not logged";
      };
    };
  };

  public shared (msg) func createUser(
    walletAddress : Text
  ) : async Result.Result<UserTypes.User, Text> {
    return await UserService.createUser(users, msg.caller, walletAddress);
  };

  // FREELANCE
  public shared func getFreelancer(userId : Principal) : async Result.Result<FreeLancerTypes.FreeLancer, Text>{
    let data = freelancers.get(userId);
    switch(data){
      case (?isData){
        return #ok isData;
      };
      case (null){
        return #err "Invalid User ID";
      }
    }
  };
  public shared func createFreelancer(
    userId : Principal, 
    fullName : Text,
    email : Text,
    username : Text,
    walletAddress : Text,
    profile : Text,
    bio : Text,
    skills : [Text],
    portofolioLinks : Text,
    languages : Text,
    joindedAt : Text,
    updatedAt : Text
    ) : async Result.Result<FreeLancerTypes.FreeLancer, Text>{
    let freelancer = await FreelancerService.createFreelancer(userId, freelancers, fullName, email, username, walletAddress, profile, bio, skills, portofolioLinks, languages, joindedAt, updatedAt);
    let updatedUser : UserTypes.User ={
      id = userId;
      profile = profile;
      role = "Freelancer";
      username = username;
      walletAddress = walletAddress;
    };
    users.put(userId, updatedUser);
    return freelancer;
  };

  // COMPANY
  public shared func getCompany(userId : Principal) : async Result.Result<CompanyTypes.Company, Text>{
    let data = companies.get(userId);
    switch(data){
      case (?isData){
        return #ok isData;
      };
      case (null){
        return #err "Invalid User ID";
      }
    }
  };
  public shared func createCompany(
    userId : Principal, 
    profile: Text,
    companyName : Text,
    walletAddress : Text,
    email : Text,
    industry : Text,
    location : Text,
    websiteUrl : Text,
    description : Text, 
    joinedAt : Text,
    updatedAt : Text,
    ) : async Result.Result<CompanyTypes.Company, Text>{
      let company = CompanyService.createCompany(userId, companies, profile, companyName, walletAddress, email, industry, location, websiteUrl, description, joinedAt, updatedAt);
      let updatedUser : UserTypes.User ={
      id = userId;
      profile = profile;
      role = "Company";
      username = companyName;
      walletAddress = walletAddress;
    };
    users.put(userId, updatedUser);
    return company;
    };
};
