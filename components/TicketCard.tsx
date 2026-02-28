import React from "react";

interface TicketCardProps {
  gameTitle: string;
  ticketId: string;
  numbers: number[];
  bonus: number;
  drawResult?: { numbers: number[]; bonus: number } | null;
  status: "winner" | "awaiting" | "loser";
  prize?: string;
  date: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  gameTitle,
  ticketId,
  numbers,
  bonus,
  drawResult = null,
  status,
  prize,
  date,
}) => {
  const numberBubble = (n: number, key: React.Key) => (
    <span
      key={key}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-semibold"
    >
      {n}
    </span>
  );

  const renderStatus = () => {
    if (status === "winner") {
      return (
        <div className="mt-2 flex items-center space-x-2 text-yellow-400">
          <span className="text-sm font-semibold">🏆 Winner</span>
          {prize && <span className="text-xs">{prize}</span>}
        </div>
      );
    }

    if (status === "awaiting") {
      return (
        <div className="mt-2 flex items-center space-x-2 text-blue-300">
          <span className="text-sm font-semibold">⏳ Awaiting Draw</span>
          {prize && <span className="text-xs">{prize}</span>}
        </div>
      );
    }

    return (
      <div className="mt-2 text-sm text-gray-400">
        {prize && prize}
      </div>
    );
  };

  return (
    <div
      className={`relative w-full rounded-xl p-6 space-y-4 dark:bg-zinc-800 bg-zinc-100
        ${status === "winner" ? "border-2 border-yellow-400" : ""}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-white">
            {gameTitle}
          </h3>
          <p className="text-xs text-blue-300">{ticketId}</p>
        </div>
        <p className="text-xs text-zinc-400">{date}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {numbers.map((n, idx) => numberBubble(n, idx))}
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white">
          + {bonus}
        </span>
      </div>

      {drawResult && (
        <div className="flex flex-wrap gap-2">
          {drawResult.numbers.map((n, idx) => (
            <span
              key={`dr-${idx}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-600 text-white"
            >
              {n}
            </span>
          ))}
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white">
            + {drawResult.bonus}
          </span>
        </div>
      )}

      {renderStatus()}
    </div>
  );
};
