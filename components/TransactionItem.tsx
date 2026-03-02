import React from "react";

interface TransactionItemProps {
  type: "prize" | "ticket" | "deposit" | "withdraw";
  title: string;
  description: string;
  date: string;
  amount: string;
}

const iconMap: Record<string, string> = {
  prize: "🏆",
  ticket: "🎟️",
  deposit: "💰",
  withdraw: "💸",
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  type,
  title,
  description,
  date,
  amount,
}) => {
  const isPositive = amount.startsWith("+");
  const amountColor = isPositive ? "text-green-400" : "text-red-400";

  return (
    <div className="flex items-center justify-between w-full py-3 border-b border-zinc-700">
      <div className="flex items-center space-x-4">
        <span className="text-2xl">{iconMap[type]}</span>
        <div className="flex flex-col">
          <span className="font-medium text-zinc-50">{title}</span>
          <span className="text-xs text-zinc-400">
            {description} · {date}
          </span>
        </div>
      </div>
      <span className={`${amountColor} font-semibold`}>{amount}</span>
    </div>
  );
};
