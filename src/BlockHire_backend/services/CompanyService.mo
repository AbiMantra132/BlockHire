import Text "mo:base/Text";
import Result "mo:base/Result";
import Principal "mo:base/Principal";

// TYPES
import CompanyTypes "../types/CompanyTypes";

module{
    public func createCompany(
        userId : Principal,
        companies : CompanyTypes.Companies,
        profile: Text,
        companyName : Text,
        walletAddress : Text,
        email : Text,
        industry : Text,
        location : ?Text,
        websiteUrl : ?Text,
        description : ?Text, 
        joinedAt : Text,
        updatedAt : Text,
    ) : Result.Result<CompanyTypes.Company, Text>{
        switch (companies.get(userId)){
            case(?companyExist){
                return #ok companyExist;
            };
            case(null){
                let newCompany : CompanyTypes.Company = {
                    id = userId; 
                    profile= profile;
                    companyName = companyName;
                    walletAddress = walletAddress;
                    email = email;
                    industry = industry;
                    location = location;
                    websiteUrl = websiteUrl;
                    description = description; 
                    openProjects = ?[]; 
                    completedProjects = ?[];
                    joinedAt = joinedAt;
                    updatedAt = updatedAt;
                };
                companies.put(userId, newCompany);
                return #ok newCompany;
            };
        };
    };
}