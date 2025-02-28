import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";

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

  private var projects : ProjectTypes.Projects = HashMap.HashMap<Text, ProjectTypes.Project>(
    10,
    Text.equal,
    Text.hash,
  );

  private var submissions : ProjectTypes.Submissions = HashMap.HashMap<Text, ProjectTypes.Submission>(
    10,
    Text.equal,
    Text.hash,
  );

  // DATA ENTRIES
  private stable var usersEntries : [(Principal, UserTypes.User)] = [];
  private stable var freelancersEntries : [(Principal, FreeLancerTypes.FreeLancer)] = [];
  private stable var companiesEntries : [(Principal, CompanyTypes.Company)] = [];
  stable var nextProjectId : Nat = 0;

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
    switch (users.get(userId)) {
      case (?userExist) {
        return #ok userExist;
      };
      case (null) {
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
  public shared func getFreelancer(userId : Principal) : async Result.Result<FreeLancerTypes.FreeLancer, Text> {
    let data = freelancers.get(userId);
    switch (data) {
      case (?isData) {
        return #ok isData;
      };
      case (null) {
        return #err "Invalid User ID";
      };
    };
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
    updatedAt : Text,
  ) : async Result.Result<FreeLancerTypes.FreeLancer, Text> {
    let freelancer = await FreelancerService.createFreelancer(userId, freelancers, fullName, email, username, walletAddress, profile, bio, skills, portofolioLinks, languages, joindedAt, updatedAt);
    let updatedUser : UserTypes.User = {
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
  public shared func getCompany(userId : Principal) : async Result.Result<CompanyTypes.Company, Text> {
    let data = companies.get(userId);
    switch (data) {
      case (?isData) {
        return #ok isData;
      };
      case (null) {
        return #err "Invalid User ID";
      };
    };
  };
  public shared func createCompany(
    userId : Principal,
    profile : Text,
    companyName : Text,
    walletAddress : Text,
    email : Text,
    industry : Text,
    location : Text,
    websiteUrl : Text,
    description : Text,
    joinedAt : Text,
    updatedAt : Text,
  ) : async Result.Result<CompanyTypes.Company, Text> {
    let company = CompanyService.createCompany(userId, companies, profile, companyName, walletAddress, email, industry, location, websiteUrl, description, joinedAt, updatedAt);
    let updatedUser : UserTypes.User = {
      id = userId;
      profile = profile;
      role = "Company";
      username = companyName;
      walletAddress = walletAddress;
    };
    users.put(userId, updatedUser);
    return company;
  };

  public shared (_msg) func createProject(
    title : Text,
    description : Text,
    skills : [Text],
    budget : Text,
    duration : Text,
    companyId : Principal,
    createdAt : Text,
  ) : async Result.Result<ProjectTypes.Project, Text> {
    // Validate and parse budget
    let parsedBudget = switch (Nat.fromText(budget)) {
      case (?num) num;
      case null return #err("Invalid budget format. Please provide a valid number.");
    };

    // Generate project ID
    let currentId = nextProjectId;
    nextProjectId += 1;

    // Create new project with default values
    let newProject : ProjectTypes.Project = {
      projectId = Nat.toText(currentId);
      companyId = companyId;
      title = title;
      description = description;
      requiredSkills = skills;
      budget = parsedBudget;
      deadline = duration;
      status = "open";
      freelancer = null;
      applicants = null;
      createdAt = createdAt;
      submission = "";
      freelancerApproved = false;
      companyApproved = false;
    };

    // Here you would typically store the project in a stable data structure
    projects.put(Nat.toText(currentId), newProject);

    #ok(newProject);
  };

  public shared func getProject(projectId : Text) : async Result.Result<ProjectTypes.Project, Text> {
    let data = projects.get(projectId);
    switch (data) {
      case (?isData) {
        return #ok isData;
      };
      case (null) {
        return #err "Invalid Project ID";
      };
    };
  };

  public shared func getProjectsByPrincipalCompanyId(principalId : Principal) : async [ProjectTypes.Project] {
    // Convert the projects to an array
    let allProjects = Iter.toArray(projects.vals());

    // Filter projects based on the principal ID
    let filteredProjects = Array.filter<ProjectTypes.Project>(
      allProjects,
      func(project : ProjectTypes.Project) : Bool {
        return project.companyId == principalId;
      },
    );

    return filteredProjects;
  };

  public shared (msg) func applyToProject(projectId : Text) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        // Update project dengan applicant baru
        let currentApplicants = switch (project.applicants) {
          case (null) { [] };
          case (?existing) { existing };
        };

        // Cek apakah sudah pernah apply
        if (Array.find<Principal>(currentApplicants, func(p) { p == msg.caller }) != null) {
          return #err("Anda sudah melamar ke project ini");
        };

        let updatedProject = {
          project with
          applicants = ?Array.append<Principal>(currentApplicants, [msg.caller]);
        };

        ignore projects.replace(projectId, updatedProject);
        #ok(());
      };
    };
  };

  public shared (msg) func approveFreelancer(projectId : Text, freelancerId : Principal) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        // Cek apakah project ini milik perusahaan yang memanggil fungsi ini
        if (project.companyId != msg.caller) {
          return #err("Anda tidak memiliki akses untuk menyetujui freelancer");
        };

        // Cek apakah freelancer sudah apply
        let currentApplicants = switch (project.applicants) {
          case (null) { [] };
          case (?existing) { existing };
        };
        if (Array.find<Principal>(currentApplicants, func(p) { p == freelancerId }) == null) {
          return #err("Freelancer belum melamar ke project ini");
        };

        // Update project dengan freelancer yang disetujui
        let updatedProject = {
          project with
          freelancer = ?[freelancerId];
        };

        ignore projects.replace(projectId, updatedProject);
        #ok(());
      };
    };
  };

  public shared (msg) func submitProject(projectId : Text, submissionLink : Text) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        // Cek apakah freelancer yang submit adalah freelancer yang disetujui
        switch (project.freelancer) {
          case (null) { return #err("Project belum memiliki freelancer yang disetujui"); };
          case (?freelancers) {
            if (Array.find<Principal>(freelancers, func(p) { p == msg.caller }) == null) {
              return #err("Anda tidak memiliki akses untuk submit project ini");
            };
          };
        };

        let currentTime = Time.now();
        let randomBase = currentTime % 100000;
        let submissionId = Int.toText(randomBase);

        let submission : ProjectTypes.Submission = {
          submissionId = submissionId;
          projectId = projectId;
          freelancerId = msg.caller;
          companyId = project.companyId;
          status = "submitted";
          owner = msg.caller;
          submission = submissionLink;
        };

        // Update project dengan submission baru
        let updatedProject = {
          project with
          submission = submissionLink;
        };

        submissions.put(submissionId, submission);
        ignore projects.replace(projectId, updatedProject);
        #ok(());
      };
    };
  };
};
