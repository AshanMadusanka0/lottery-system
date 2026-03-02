import React from "react";

interface TransactionItemProps {
  type: "prize" | "ticket" | "deposit" | "withdraw";
  title: string;
  description: string;
  date: string;
  amount: string;
}

const iconMap: Record<string, React.ReactNode> = {
  prize: (
    <div className="w-10 h-10 rounded-full bg-yellow-900/40 flex items-center justify-center">
      <span className="text-lg">🏆</span>
    </div>
  ),
  ticket: (
    <div className="w-10 h-10 rounded-full bg-pink-900/40 flex items-center justify-center">
      <span className="text-lg">🎟️</span>
    </div>
  ),
  deposit: (
    <div className="w-10 h-10 rounded-full bg-cyan-900/40 flex items-center justify-center">
      <span className="text-lg">💳</span>
    </div>
  ),
  withdraw: (
    <div className="w-10 h-10 rounded-full bg-red-900/40 flex items-center justify-center">
      <span className="text-lg">💸</span>
    </div>
  ),
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  title,
  description,
  date,
  amount,
}) => {
  const isPositive = amount.startsWith("+");
  const amountColor = isPositive ? "text-emerald-400" : "text-red-400";

  return (
    <div className="flex items-center justify-between w-full py-4 border-b border-slate-700 last:border-b-0">
      <div className="flex items-center gap-4">
        {iconMap[type]}
        <div className="flex flex-col">
          <span className="font-semibold text-white text-sm">{title}</span>
          <span className="text-xs text-gray-400">
            {description} · {date}
          </span>
        </div>
      </div>
      <span className={`${amountColor} font-bold text-sm`}>{amount}</span>
    </div>
  );
};
