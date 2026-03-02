"use client";

import React, { useEffect, useState } from "react";

interface DepositModalProps {
  onClose: () => void;
  onConfirm: (amount: number, method: string) => void;
}

const presets = [100, 250, 500, 1000, 2000];

export const DepositModal: React.FC<DepositModalProps> = ({ onClose, onConfirm }) => {
  const [selected, setSelected] = useState<number | "custom">(500);
  const [inputValue, setInputValue] = useState<string>(String(500));
  const [method, setMethod] = useState<string>("💳 Credit / Debit Card");

  // keep input in sync with selected preset
  useEffect(() => {
    if (selected === "custom") return;
    setInputValue(String(selected));
  }, [selected]);

  const amount = Number(inputValue || 0);

  const handlePresetClick = (p: number | "custom") => {
    setSelected(p);
    if (p !== "custom") setInputValue(String(p));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected("custom");
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    if (amount > 0) {
      // strip emoji from method label when sending
      const plainMethod = method.replace(/^\S+\s*/, "");
      onConfirm(amount, plainMethod);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="card rounded-2xl w-96 p-6 relative shadow-xl">
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
        <div className="grid grid-cols-3 gap-3 mb-4">
          {presets.map((p) => (
            <button
              key={p}
              className={`py-2 rounded text-sm font-medium transition-colors border ${
                selected === p
                  ? "bg-yellow-400 text-slate-900 border-yellow-400"
                  : "bg-slate-700 text-gray-300 border-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => handlePresetClick(p)}
            >
              ${p}
            </button>
          ))}
          <button
            className={`py-2 rounded text-sm font-medium transition-colors border ${
              selected === "custom"
                ? "bg-yellow-400 text-slate-900 border-yellow-400"
                : "bg-slate-700 text-gray-300 border-slate-700 hover:bg-slate-600"
            }`}
            onClick={() => handlePresetClick("custom")}
          >
            Custom
          </button>
        </div>

        {/* Amount input always visible */}
        <div className="mb-4">
          <label className="text-xs text-gray-400">Amount ($)</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full mt-2 px-3 py-3 bg-slate-700 rounded text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        {/* Payment method */}
        <div className="mb-6">
          <label className="text-xs text-gray-400">Payment Method</label>
          <div className="relative mt-2">
            <select
              className="w-full px-3 py-3 bg-slate-700 rounded text-white appearance-none pr-10 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>💳 Credit / Debit Card</option>
              <option>🏦 Bank Transfer</option>
              <option>📱 Mobile Wallet</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-300">
              ▾
            </div>
          </div>
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
