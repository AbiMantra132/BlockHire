import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Int "mo:base/Int";
import Nat64 "mo:base/Nat64";
import ProjectTypes "../types/ProjectTypes";
import CompanyTypes "../types/CompanyTypes";
import HistoryService "HistoryService";
import TransactionsType "../types/TransactionsType";

module {
  public func handlecreateProject(
    title : Text,
    description : Text,
    skills : [Text],
    duration : Text,
    companyId : Principal,
    createdAt : Text,
    freeLancerNeeded : Nat,
    currentId : Nat,
    parsedBudget : Nat,
    projects : ProjectTypes.Projects,
  ) : async Result.Result<ProjectTypes.Project, Text> {

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

  public func handlegetProject(projectId : Text, projects : ProjectTypes.Projects, companies : CompanyTypes.Companies) : async Result.Result<{ project : ProjectTypes.Project; company : CompanyTypes.Company }, Text> {
    let data = projects.get(projectId);

    switch (data) {
      case (?isData) {
        let company = switch (companies.get(isData.companyId)) {
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

  public func handlegetProjectsByPrincipalCompanyId(principalId : Principal, projects : ProjectTypes.Projects) : async [ProjectTypes.Project] {
    let allProjects = Iter.toArray(projects.vals());

    let filteredProjects = Array.filter<ProjectTypes.Project>(
      allProjects,
      func(project : ProjectTypes.Project) : Bool {
        return project.companyId == principalId;
      },
    );

    return filteredProjects;
  };

  public func handlegetProjectsByFreeLancerIds(principalId : Principal, projects : ProjectTypes.Projects) : async [ProjectTypes.Project] {
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

  public func handleapplyToProject(projectId : Text, msg : Principal, projects : ProjectTypes.Projects, freelancerStatus : ProjectTypes.FreelancerStatuses) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        let currentApplicants = switch (project.applicants) {
          case (null) { [] };
          case (?existing) { existing };
        };

        if (Array.find<Principal>(currentApplicants, func(p) { p == msg }) != null) {
          return #err("Anda sudah melamar ke project ini");
        };

        let updatedProject = {
          project with
          applicants = ?Array.append<Principal>(currentApplicants, [msg]);
        };

        let idStatusFreelancer = generateRandomID();

        let freelancerStatusObject : ProjectTypes.FreeLancerStatus = {
          freelancerStatusId = idStatusFreelancer;
          freelancerId = msg;
          status = "pending";
          projectId = projectId;
        };

        freelancerStatus.put(idStatusFreelancer, freelancerStatusObject);

        ignore projects.replace(projectId, updatedProject);
        #ok(());
      };
    };
  };

  public func handleapproveFreelancer(projectId : Text, freelancerId : Principal, projects : ProjectTypes.Projects, msg : Principal) : async Result.Result<(), Text> {
    switch (projects.get(projectId)) {
      case null {
        #err("Project tidak ditemukan");
      };
      case (?project) {
        // Cek apakah project ini milik perusahaan yang memanggil fungsi ini
        if (project.companyId != msg) {
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

  public func handlesubmitProject(projectId : Text, submissionLink : Text, submissionImage : Text, projects : ProjectTypes.Projects, msg : Principal, submissions : ProjectTypes.Submissions) : async Result.Result<(), Text> {
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
            if (Array.find<Principal>(freelancers, func(p) { p == msg }) == null) {
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
          freelancerId = [msg];
          companyId = project.companyId;
          status = "submitted";
          owner = msg;
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

  public func approveSubmission(
    projectId : Text,
    submissionId : Text,
    freelancers : [Principal],
    submissions : ProjectTypes.Submissions,
    projects : ProjectTypes.Projects,
    msg : Principal,
    transactions : TransactionsType.Transactions,
  ) : async Result.Result<(), Text> {
    switch (submissions.get(submissionId)) {
      case null {
        #err("Submission tidak ditemukan");
      };
      case (?submission) {
        if (submission.companyId != msg) {
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
         let payment = await HistoryService.paymentTransaction(
            msg,
            freelancer,
            Nat64.fromNat(project.budget),
            submission.projectId,
            Int.toText(Time.now()),
            transactions
          );

          let randomId : Text = generateRandomID();

          switch (payment) {
            case (#err(e)) {
              return #err("Gagal transfer ke " # Principal.toText(freelancer) # ": " # e);
            };
            case (#ok(_)) {
              let _createHistory = await HistoryService.historyTransaction(
                randomId,
                msg,
                freelancer,
                project.budget,
                submission.projectId,
                Int.toText(Time.now()),
                transactions
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
};
