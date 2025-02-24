import Text "mo:base/Text";
import Result "mo:base/Result";
import Principal "mo:base/Principal";

// TYPES
import FreeLancerTypes "../types/FreeLancerTypes";

module{
    public func createFreelancer(
        userId : Principal, 
        freelancers : FreeLancerTypes.FreeLancers,
        fullName : Text,
        email : Text,
        username : Text,
        walletAddress : Text,
        profile : Text,
        bio : ?Text,
        skills : [Text],
        portfolioLinks : ?[Text],
        hourlyRate : ?Nat,
        languages : Text,
        joinedAt : Text,
        updatedAt : Text,
        ) : async Result.Result<FreeLancerTypes.FreeLancer, Text>{

        switch (freelancers.get(userId)){
            case(?freelanceExist){
                return #ok(freelanceExist);
            };
            case (null){
                let newFreelancer : FreeLancerTypes.FreeLancer = {
                    id = userId;
                    fullName = fullName;
                    email = email;
                    username = username;
                    walletAddress = walletAddress;
                    profile = profile;
                    bio = bio;
                    skills = skills;
                    portfolioLinks = portfolioLinks;
                    hourlyRate = hourlyRate;
                    languages = languages;
                    availabilityStatus = "Avaliable";
                    joinedAt = joinedAt;
                    updatedAt = updatedAt;
                };
                freelancers.put(userId, newFreelancer);
                return #ok newFreelancer;
            };
        };
    }
}