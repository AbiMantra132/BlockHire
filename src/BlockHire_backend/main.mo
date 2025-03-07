import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Nat64 "mo:base/Nat64";
import Error "mo:base/Error";

// SERVICES
import UserService "services/UserService";
import FreelancerService "services/FreelancerService";
import CompanyService "services/CompanyService";
import IcpLedger "canister:icp_ledger_canister";

// TYPES
import UserTypes "types/UserTypes";
import FreeLancerTypes "types/FreeLancerTypes";
import CompanyTypes "types/CompanyTypes";
import ProjectTypes "types/ProjectTypes";
import TransactionsType "types/TransactionsType";

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

  private var freelancerStatus : ProjectTypes.FreelancerStatuses = HashMap.HashMap<Text, ProjectTypes.FreeLancerStatus>(
    10,
    Text.equal,
    Text.hash,
  );

  private var transactions : TransactionsType.Transactions = HashMap.HashMap<Text, TransactionsType.Transaction>(
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
    freeLancerNeeded : Nat,
  ) : async Result.Result<ProjectTypes.Project, Text> {
    let parsedBudget = switch (Nat.fromText(budget)) {
      case (?num) num;
      case null return #err("Invalid budget format. Please provide a valid number.");
    };

    let currentId = nextProjectId;
    nextProjectId += 1;

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
      freelancerNeeded = freeLancerNeeded;
      freelancerApproved = false;
      companyApproved = false;
    };

    projects.put(Nat.toText(currentId), newProject);

    #ok(newProject);
  };

  public shared func getAllProject() : async [ProjectTypes.Project] {
    let data = Iter.toArray(projects.vals());

    return data;
  };

  public shared func getProject(projectId : Text) : async Result.Result<{project : ProjectTypes.Project; company : CompanyTypes.Company;}, Text> {
    let data = projects.get(projectId);

    switch (data) {
      case (?isData) {
        let company = switch(companies.get(isData.companyId)) {
          case (null) { return #err("Invalid Company ID") };
          case (?company) { company };
        };

        let result = {
          project = isData;
          company = company;
        };

        return #ok result;
      };
      case (null) {
        return #err "Invalid Project ID";
      };
    };
  };

  public shared func getProjectsByPrincipalCompanyId(principalId : Principal) : async [ProjectTypes.Project] {
    let allProjects = Iter.toArray(projects.vals());

    let filteredProjects = Array.filter<ProjectTypes.Project>(
      allProjects,
      func(project : ProjectTypes.Project) : Bool {
        return project.companyId == principalId;
      },
    );

    return filteredProjects;
  };

  public shared func getProjectsByFreeLancerIds(principalId : Principal) : async [ProjectTypes.Project] {
    let allProjects = Iter.toArray(projects.vals());

    let filteredProjects = Array.filter<ProjectTypes.Project>(
      allProjects,
      func(project : ProjectTypes.Project) : Bool {
        switch (project.freelancer) {
          case (null) { false };
          case (?freelancers) {
            Array.find<Principal>(freelancers, func(p) { p == principalId }) != null;
          };
        };
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
        let currentApplicants = switch (project.applicants) {
          case (null) { [] };
          case (?existing) { existing };
        };

        if (Array.find<Principal>(currentApplicants, func(p) { p == msg.caller }) != null) {
          return #err("Anda sudah melamar ke project ini");
        };

        let updatedProject = {
          project with
          applicants = ?Array.append<Principal>(currentApplicants, [msg.caller]);
        };

        let idStatusFreelancer = generateRandomID();

        let freelancerStatusObject : ProjectTypes.FreeLancerStatus = 
        {
          freelancerStatusId = idStatusFreelancer;
          freelancerId = msg.caller;
          status = "pending";
          projectId = projectId;
        };

        freelancerStatus.put(idStatusFreelancer, freelancerStatusObject);

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
          freelancerNeeded = if (project.freelancerNeeded > 0) {
            project.freelancerNeeded - 1;
          } else { 0 };
        };

        ignore projects.replace(projectId, updatedProject);
        #ok(());
      };
    };
  };

  public shared (msg) func submitProject(projectId : Text, submissionLink : Text, submissionImage : Text) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        // Cek apakah freelancer yang submit adalah freelancer yang disetujui
        switch (project.freelancer) {
          case (null) {
            return #err("Project belum memiliki freelancer yang disetujui");
          };
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
          freelancerId = [msg.caller];
          companyId = project.companyId;
          status = "submitted";
          owner = msg.caller;
          submission = submissionLink;
          submissionImage = submissionImage;
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

  public shared (msg) func approveSubmission(
    projectId : Text,
    submissionId : Text,
    freelancers : [Principal],
  ) : async Result.Result<(), Text> {
    switch (submissions.get(submissionId)) {
      case null {
        #err("Submission tidak ditemukan");
      };
      case (?submission) {
        if (submission.companyId != msg.caller) {
          return #err("Akses ditolak, perusahaan tidak match");
        };

        // Update status submission
        let updatedSubmission = {
          submission with
          status = "approved";
          freelancerId = freelancers;
        };

        ignore submissions.replace(submissionId, updatedSubmission);

        // Get project budget for payment calculation
        let project = switch (projects.get(projectId)) {
          case (null) return #err("Project tidak ditemukan");
          case (?p) p;
        };

        // Lakukan pembayaran ke semua freelancer
        for (freelancer in freelancers.vals()) {
          let payment = await paymentTransaction(
            msg.caller,
            freelancer,
            Nat64.fromNat(project.budget),
            submission.projectId,
            Int.toText(Time.now()),
          );

          let randomId : Text = generateRandomID();

          switch (payment) {
            case (#err(e)) {
              return #err("Gagal transfer ke " # Principal.toText(freelancer) # ": " # e);
            };
            case (#ok(_)) {
              let _createHistory = await historyTransaction(
                randomId,
                msg.caller,
                freelancer,
                project.budget,
                submission.projectId,
                Int.toText(Time.now()),
              );

            };
          };
        };
        #ok(());
      };
    };
  };

  // fungsi generate random ID
  private func generateRandomID() : Text {
    let currentTime = Time.now();
    let randomBase = currentTime % 100000;
    let randomId = Int.toText(randomBase);
    randomId;
  };

  // Fungsi History Transaksi
  private func historyTransaction(
    id : Text,
    from : Principal,
    to : Principal,
    amount : Nat,
    projectId : Text,
    Timestamp : Text,
  ) : async Result.Result<(), Text> {
    transactions.put(
      id,
      {
        id = id;
        from = from;
        to = to;
        amount = amount;
        projectId = projectId;
        timestamp = Timestamp;
      },
    );
    #ok(());
  };

  // Fungsi Mendapatkan Histori Transaksi
  public query func getTransactionHistory(userPrincipal : Principal) : async [TransactionsType.Transaction] {
    let allTransactions = transactions.vals();

    let filteredTransactions = Iter.filter<TransactionsType.Transaction>(
      allTransactions,
      func(tx : TransactionsType.Transaction) : Bool {
        tx.from == userPrincipal or tx.to == userPrincipal;
      },
    );

    Iter.toArray(filteredTransactions);
  };

  // Fungsi transaksi
  private func paymentTransaction(
    from : Principal,
    to : Principal,
    amount : Nat64,
    projectId : Text,
    createdAt : Text,
  ) : async Result.Result<Nat64, Text> {

    // Simpan transaksi ke storage
    let txId = Int.toText(Time.now());
    transactions.put(
      txId,
      {
        id = txId;
        from = from;
        to = to;
        amount = Nat64.toNat(amount);
        projectId = projectId;
        timestamp = createdAt;
      },
    );

    // transfer ICP
    try {
      let toAccount = await IcpLedger.account_identifier({
        owner = to;
        subaccount = null;
      });

      let transferArgs : IcpLedger.TransferArgs = {
        memo = 0;
        amount = { e8s = amount };
        fee = { e8s = 10_000 };
        from_subaccount = null;
        to = toAccount;
        created_at_time = null;
      };

      let result = await IcpLedger.transfer(transferArgs);

      switch (result) {
        case (#Ok(blockIndex)) #ok(blockIndex);
        case (#Err(e)) throw Error.reject("Transfer error: " # debug_show (e));
      };
    } catch (e) {
      #err("Error dalam transaksi: " # Error.message(e));
    };
  };

  public func getCompanyDetailProject(companyId : Principal) : async Result.Result<TransactionsType.CompanyDetailProject, Text> {
    // Ambil semua proyek perusahaan
    let companyProjects = Iter.toArray(
      Iter.filter(projects.vals(), func(p : ProjectTypes.Project) : Bool { p.companyId == companyId })
    );

    let totalProject = companyProjects.size();
    let completedProject = Array.filter(companyProjects, func(p : ProjectTypes.Project) : Bool { p.status == "completed" }).size();

    // Dapatkan semua project ID perusahaan
    let projectIds = Array.map(companyProjects, func(p : ProjectTypes.Project) : Text { p.projectId });

    // Helper function untuk cek project ID
    func containsProjectId(targetId : Text) : Bool {
      Array.find<Text>(projectIds, func(id : Text) : Bool { id == targetId }) != null;
    };

    // Hitung permintaan pending
    let allSubmissions = Iter.toArray(submissions.vals());
    let pendingRequest = Array.filter(
      allSubmissions,
      func(s : ProjectTypes.Submission) : Bool {
        containsProjectId(s.projectId) and s.status == "submitted"
      },
    ).size();

    // freelancer
    var freelancerDetails : [FreeLancerTypes.FreeLancer] = [];
    var activeFreelancers : [Principal] = [];  
    for (s in allSubmissions.vals()) {
      if (containsProjectId(s.projectId) and s.status == "approved") {
        for (f in s.freelancerId.vals()) {
          switch(freelancers.get(f)) {
            case (?freelancer) {
              if (Array.find<FreeLancerTypes.FreeLancer>(
                freelancerDetails, 
                func(fd : FreeLancerTypes.FreeLancer) : Bool { 
                  fd.id == freelancer.id 
                }
              ) == null) {
                freelancerDetails := Array.append(freelancerDetails, [freelancer]);
              }
            };
            case null { };
          };
          
          if (Array.find<Principal>(activeFreelancers, func(p : Principal) : Bool { p == f }) == null) {
            activeFreelancers := Array.append(activeFreelancers, [f]);
          };
        };
      };
    };

    // Hitung total pengeluaran
    var totalSpending : Nat = 0;
    let allTransactions = Iter.toArray(transactions.vals());
    for (t in allTransactions.vals()) {
      if (t.from == companyId and containsProjectId(t.projectId)) {
        totalSpending += t.amount;
      };
    };

    #ok({
      companyId = companyId;
      totalSpending = totalSpending;
      activeFreelancer = activeFreelancers.size();
      totalProject = totalProject;
      pendingRequest = pendingRequest;
      completedProject = completedProject;
      listFreelancer = freelancerDetails;
    });
  };

  public func getFreelancerDetail(freelancerId : Principal) : async Result.Result<TransactionsType.FreelancerDetailProject, Text> {
    // Get all projects where freelancer is involved
    let freelancerProjects = Iter.toArray(
      Iter.filter(projects.vals(), func(p : ProjectTypes.Project) : Bool { 
        switch(p.freelancer) {
          case(null) { false };
          case(?freelancers) {
            Array.find<Principal>(freelancers, func(f : Principal) : Bool { f == freelancerId }) != null
          };
        }
      })
    );

    let activeProjects = Array.filter(freelancerProjects, func(p : ProjectTypes.Project) : Bool { 
      not Text.equal(p.status, "completed") and not Text.equal(p.status, "passed");
    }).size();

    // Get all submissions for pending payments
    let allSubmissions = Iter.toArray(submissions.vals());
    let pendingPayments = Array.filter(
      allSubmissions,
      func(s : ProjectTypes.Submission) : Bool {
        Array.find<Principal>(s.freelancerId, func(f : Principal) : Bool { f == freelancerId }) != null 
        and s.status == "submitted"
      }
    ).size();

    // Calculate total earnings
    var totalEarning : Nat = 0;
    let allTransactions = Iter.toArray(transactions.vals());
    for (t in allTransactions.vals()) {
      if (t.to == freelancerId) {
        totalEarning += t.amount;
      };
    };

    #ok({
      freelancerId = freelancerId;
      totalEarning = totalEarning;
      activeProject = activeProjects;
      pendingPayment = pendingPayments;
      myProject = freelancerProjects;
    });
  };
};
