import React from "react";
import { TicketCard } from "../../components/TicketCard";

const tickets = [
  {
    gameTitle: "MegaGold",
    ticketId: "TK-10029",
    numbers: [7, 14, 22, 35, 41, 48],
    bonus: 3,
    drawResult: { numbers: [7, 14, 22, 35, 41, 48], bonus: 3 },
    status: "winner" as const,
    prize: "+$5,000",
    date: "Feb 23, 2026",
  },
  {
    gameTitle: "DailyLuck",
    ticketId: "TK-10031",
    numbers: [3, 9, 17, 28, 39, 45],
    bonus: 7,
    drawResult: null,
    status: "awaiting" as const,
    prize: "$5 spent",
    date: "Feb 23, 2026",
  },
];

export default function MyTicketsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">My Tickets</h1>
        <p className="text-gray-400 text-sm mb-4">All your number entries and their results</p>
        <div className="h-1 bg-linear-to-r from-yellow-400 to-transparent w-full"></div>
      </div>
      <div className="flex flex-col gap-6">
        {tickets.map((ticket, idx) => (
          <TicketCard key={idx} {...ticket} />
        ))}
      </div>
    </div>
  );
}
