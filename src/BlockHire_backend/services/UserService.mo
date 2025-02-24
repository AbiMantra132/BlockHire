import Text "mo:base/Text";
import Result "mo:base/Result";
import Principal "mo:base/Principal";

// TYPES
import UserTypes "../types/UserTypes";

// CONSTANTS
import GlobalConstants "../constants/constants";


module{
    public func createUser(
        users : UserTypes.Users,
        userId : Principal,
        walletAddress : Text,
    ) : async Result.Result<UserTypes.User, Text> {
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
                let newUser : UserTypes.User = {
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