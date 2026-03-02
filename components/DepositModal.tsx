"use client";

import React, { useState } from "react";

interface DepositModalProps {
  onClose: () => void;
  onConfirm: (amount: number, method: string) => void;
}

const presets = [100, 250, 500, 1000, 2000];

export const DepositModal: React.FC<DepositModalProps> = ({ onClose, onConfirm }) => {
  const [selected, setSelected] = useState<number | "custom">(500);
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState("Credit / Debit Card");

  const amount = selected === "custom" ? Number(customAmount) : selected;

  const handleConfirm = () => {
    if (amount > 0) {
      onConfirm(amount, method);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-2xl w-96 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-white mb-4">
          <span className="mr-2">💰</span>Deposit Funds
        </h2>

        {/* preset buttons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {presets.map((p) => (
            <button
              key={p}
              className={`py-2 rounded text-sm font-medium transition-colors
                ${selected === p ? "bg-yellow-400 text-slate-900" : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`
              }
              onClick={() => setSelected(p)}
            >
              ${p}
            </button>
          ))}
          <button
            className={`py-2 rounded text-sm font-medium transition-colors
              ${selected === "custom" ? "bg-yellow-400 text-slate-900" : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`
            }
            onClick={() => setSelected("custom")}
          >
            Custom
          </button>
        </div>

        {selected === "custom" && (
          <div className="mb-4">
            <label className="text-xs text-gray-400">Amount ($)</label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 bg-slate-700 rounded text-white placeholder-gray-400"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          </div>
        )}

        <div className="mb-6">
          <label className="text-xs text-gray-400">Payment Method</label>
          <select
            className="w-full mt-1 px-3 py-2 bg-slate-700 rounded text-white"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>Credit / Debit Card</option>
            <option>Bank Transfer</option>
            <option>Crypto</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-slate-700 text-gray-300 rounded hover:bg-slate-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-cyan-400 text-slate-900 rounded font-semibold hover:bg-cyan-300"
            onClick={handleConfirm}
          >
            Confirm Deposit
          </button>
        </div>
      </div>
    </div>
  );
};
