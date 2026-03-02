import React from "react";
import { WalletBalanceCard } from "../../components/WalletBalanceCard";
import { TransactionItem } from "../../components/TransactionItem";

const transactions = [
  {
    type: "prize" as const,
    title: "Prize — MegaGold",
    description: "Matched all 6 + Bonus",
    date: "Feb 23, 2:01 PM",
    amount: "+$2,000",
  },
  {
    type: "ticket" as const,
    title: "Ticket — MegaGold",
    description: "6 numbers picked",
    date: "Feb 23, 1:00 PM",
    amount: "-$10",
  },
  {
    type: "ticket" as const,
    title: "Ticket — DailyLuck",
    description: "6 numbers picked",
    date: "Feb 23, 3:30 PM",
    amount: "-$5",
  },
  {
    type: "deposit" as const,
    title: "Deposit",
    description: "Credit Card",
    date: "Feb 20, 10:00 AM",
    amount: "+$500",
  },
  {
    type: "deposit" as const,
    title: "Deposit",
    description: "Bank Transfer",
    date: "Feb 15, 9:00 AM",
    amount: "+$1,500",
  },
];

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Wallet</h1>
        <p className="text-gray-400 text-sm mb-4">Manage balance and transactions</p>
        <div className="h-1 bg-linear-to-r from-yellow-400 to-transparent w-full"></div>
      </div>

      {/* Available Balance Card */}
      <WalletBalanceCard balance="$2,400" walletId="W-U001" />

      {/* Transaction History */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="space-y-0">
            {transactions.map((transaction, idx) => (
              <TransactionItem
                key={idx}
                {...transaction}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
