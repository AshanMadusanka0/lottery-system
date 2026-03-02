import React from "react";

interface WalletBalanceCardProps {
  balance: string;
  walletId: string;
  onDeposit?: () => void;
}

export const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
  balance,
  walletId,
  onDeposit,
}) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 w-full border border-slate-700">
      <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">
        Available Balance
      </p>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-5xl font-bold text-yellow-400">{balance}</span>
          <p className="text-xs text-gray-400 mt-2">Wallet ID: {walletId}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
          onClick={onDeposit}
        >
          + Deposit
        </button>
        <button className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg border border-slate-600 hover:bg-slate-600 transition-colors">
          Withdraw
        </button>
      </div>
    </div>
  );
};
