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
  const isWinner = status === "winner";
  const isAwaiting = status === "awaiting";

  // Determine color scheme based on status
  const primaryColor = isWinner ? "#00D9D9" : "#1E293B"; // Cyan for winner, dark blue for awaiting
  const accentColor = isWinner ? "#FCD34D" : "#94A3B8"; // Gold for winner, silver for awaiting
  const numColor = isWinner ? "#00D9D9" : "#FCD34D"; // Cyan for winner, gold for awaiting

  const numberBubble = (n: number, key: React.Key, isDrawResult: boolean = false) => (
    <div
      key={key}
      className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm
        ${
          isDrawResult
            ? `border-2 ${isWinner ? "border-yellow-500 text-yellow-500" : "border-yellow-600 text-yellow-600"}`
            : `${isWinner ? "bg-cyan-400 text-slate-900" : "bg-yellow-400 text-slate-900"}`
        }
      `}
    >
      {n}
    </div>
  );

  const bonusBubble = (num: number, isDrawResult: boolean = false) => (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm
        ${
          isDrawResult
            ? `border-2 border-pink-500 text-pink-500`
            : `bg-pink-500 text-white`
        }
      `}
    >
      + <span className="ml-1">{num}</span>
    </div>
  );

  return (
    <div
      className={`relative w-full rounded-2xl p-6 space-y-5 backdrop-blur-sm card ${isWinner ? "border-2 border-cyan-400" : "border"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-white">{gameTitle}</h3>
          <p className="text-xs text-cyan-400 mt-1">{ticketId}</p>
        </div>
        <p className="text-xs text-gray-400">{date}</p>
      </div>

      {/* Your Numbers Section */}
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Your Numbers</p>
        <div className="flex flex-wrap gap-3">
          {numbers.map((n, idx) => numberBubble(n, idx))}
          {bonusBubble(bonus)}
        </div>
      </div>

      {/* Draw Result Section */}
      {drawResult && (
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Draw Result</p>
          <div className="flex flex-wrap gap-3">
            {drawResult.numbers.map((n, idx) => numberBubble(n, `dr-${idx}`, true))}
            {bonusBubble(drawResult.bonus, true)}
          </div>
        </div>
      )}

      {/* Status and Prize Section */}
      <div className="flex items-center justify-between pt-2">
        <div>
          {isWinner && (
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 rounded-full p-1">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="text-sm font-semibold text-white">Winner</span>
              <span className="text-xs text-gray-400">Matched 6 numbers + Bonus ♦</span>
            </div>
          )}
          {isAwaiting && (
            <div className="flex items-center gap-2">
              <div className="bg-slate-600 rounded-full p-1">
                <span className="text-white font-bold text-xs">⏳</span>
              </div>
              <span className="text-sm font-semibold text-white">Awaiting Draw</span>
            </div>
          )}
        </div>
        {prize && (
          <span className={`text-lg font-bold ${isWinner ? "text-yellow-400" : "text-gray-400"}`}>
            {prize}
          </span>
        )}
      </div>
    </div>
  );
};
