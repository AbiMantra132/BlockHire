import Result "mo:base/Result";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Int "mo:base/Int";
import Nat64 "mo:base/Nat64";
import Error "mo:base/Error";
import TransactionsType "../types/TransactionsType";
import IcpLedger "canister:icp_ledger_canister";



module {
  // Fungsi Mendapatkan Histori Transaksi
  public func handlegetTransactionHistory(userPrincipal : Principal, transactions: TransactionsType.Transactions) : async [TransactionsType.Transaction] {
    let allTransactions = transactions.vals();

    let filteredTransactions = Iter.filter<TransactionsType.Transaction>(
      allTransactions,
      func(tx : TransactionsType.Transaction) : Bool {
        tx.from == userPrincipal or tx.to == userPrincipal;
      },
    );

    Iter.toArray(filteredTransactions);
  };

  // Fungsi History Transaksi
  public func historyTransaction(
    id : Text,
    from : Principal,
    to : Principal,
    amount : Nat,
    projectId : Text,
    Timestamp : Text,
    transactions : TransactionsType.Transactions,
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


  // Fungsi transaksi
  public func paymentTransaction(
    from : Principal,
    to : Principal,
    amount : Nat64,
    projectId : Text,
    createdAt : Text,
    transactions : TransactionsType.Transactions
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
}