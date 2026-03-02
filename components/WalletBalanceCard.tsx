import React from "react";

interface WalletBalanceCardProps {
  balance: string;
  walletId: string;
}

export const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
  balance,
  walletId,
}) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-3xl">
      <p className="text-xs text-zinc-400">Available Balance</p>
      <div className="flex items-center space-x-2">
        <span className="text-4xl font-bold text-yellow-400">{balance}</span>
      </div>
      <p className="text-xs text-zinc-500">Wallet ID: {walletId}</p>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
          + Deposit
        </button>
        <button className="px-4 py-2 border border-zinc-600 rounded hover:bg-zinc-700">
          Withdraw
        </button>
      </div>
    </div>
  );
};
