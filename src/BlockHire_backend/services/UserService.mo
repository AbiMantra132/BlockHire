import Text "mo:base/Text";
import Result "mo:base/Result";
import Principal "mo:base/Principal";

// TYPES
import Types "../types/Types";

// CONSTANTS
import GlobalConstants "../constants/constants";


module{
    public func createUser(
        users : Types.Users,
        userId : Principal,
        walletAddress : Text,
    ) : async Result.Result<Types.User, Text> {
        // CEK USER PRINCIPAL
        if (Principal.isAnonymous(userId)) {
            return #err "Anonymous principals are not allowed";
        };

        // CEK USER WALLET ADDRES
        if (Text.size(walletAddress) == 0) {
            return #err "Wallet address cannot be empty";
        };

        // CHECK USER ALLREADY EXIST
        switch (users.get(userId)) {
            case (?userExist) {
                // RETURN IF EXIST
                return #ok(userExist);
            };
            case null {
                // CREATE NEW IF NO
                let newUser : Types.User = {
                    id = userId;
                    username = "User";
                    walletAddress = walletAddress;
                    profile = GlobalConstants.PROFILE_DEFAULT;
                };

                users.put(userId, newUser);
                return #ok(newUser);
            };
        };
    };
}