import React, { useState, useEffect } from "react";

interface BuySellProps {
  symbol?: string;
  type?: "buy" | "sell";
}

const BuySell: React.FC<BuySellProps> = ({ symbol = "BTCUSDT", type }) => {
  const [side, setSide] = useState<"BUY" | "SELL">("BUY");
  const [price, setPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);
  const [tab, setTab] = useState<"limit" | "market" | "tpsl">("limit");
  const [margin, setMargin] = useState<boolean>(false);

  const baseSymbol = symbol.replace("USDT", "");

  const total =
    price && amount ? (parseFloat(price) * parseFloat(amount)).toFixed(2) : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đặt lệnh ${side} ${amount} ${baseSymbol} tại giá ${price} USDT`);
  };

  // ĐỒNG BỘ side với prop type mỗi khi type thay đổi
  useEffect(() => {
    if (type === "buy") setSide("BUY");
    if (type === "sell") setSide("SELL");
  }, [type]);

  return (
    <div className="bg-[#0f1115] border border-[#23262F] rounded-xl p-4 text-white w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Xác nhận lệnh</span>
        <div className="flex pt-6 items-center gap-2">
          <span className="text-xs text-gray-400">Ký quỹ</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={margin}
              onChange={() => setMargin(!margin)}
            />
            <div className="w-10 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
        </div>
      </div>

      {/* Tabs: Buy/Sell */}
      <div className="flex mb-3">
        <button
          className={`flex-1 py-2 font-bold rounded-l-lg ${
            side === "BUY"
              ? "bg-[#25a750] text-white"
              : "bg-[#1e1f23] text-gray-300"
          }`}
          onClick={() => setSide("BUY")}
        >
          Mua
        </button>
        <button
          className={`flex-1 py-2 font-bold rounded-r-lg ${
            side === "SELL"
              ? "bg-[#ca3f64] text-white"
              : "bg-[#1e1f23] text-gray-300"
          }`}
          onClick={() => setSide("SELL")}
        >
          Bán
        </button>
      </div>

      {/* Tabs: Order Type */}
      <div className="flex mb-4 border border-[#23262F] rounded-lg overflow-hidden text-sm">
        <button
          onClick={() => setTab("limit")}
          className={`flex-1 py-2 ${
            tab === "limit"
              ? "bg-[#23262F] text-white"
              : "bg-[#1e1f23] text-gray-400"
          }`}
        >
          Giới hạn
        </button>
        <button
          onClick={() => setTab("market")}
          className={`flex-1 py-2 ${
            tab === "market"
              ? "bg-[#23262F] text-white"
              : "bg-[#1e1f23] text-gray-400"
          }`}
        >
          Thị trường
        </button>
        <button
          onClick={() => setTab("tpsl")}
          className={`flex-1 py-2 ${
            tab === "tpsl"
              ? "bg-[#23262F] text-white"
              : "bg-[#1e1f23] text-gray-400"
          }`}
        >
          TP/SL
        </button>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Giá */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Giá (USDT)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="666.9"
            className="w-full bg-[#23262F] text-white rounded-lg p-3 outline-none text-sm"
          />
        </div>

        {/* Số lượng */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            Số lượng ({baseSymbol})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Tối thiểu 0,001"
            className="w-full bg-[#23262F] text-white rounded-lg p-3 outline-none text-sm"
          />
        </div>

        {/* Thanh phần trăm */}
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={100}
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            className="w-full accent-[#4ade80]"
          />
          <span className="text-xs text-gray-400">{percent}%</span>
        </div>

        {/* Tổng */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            Tổng (USDT)
          </label>
          <input
            value={total}
            readOnly
            placeholder="0.00"
            className="w-full bg-[#23262F] text-white rounded-lg p-3 text-sm"
          />
        </div>

        {/* Phụ trợ */}
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>
            Khả dụng <span className="text-white">23.83 USDT</span>
          </span>
          <span>
            Mua tối đa <span className="text-white">0.035745 {baseSymbol}</span>
          </span>
        </div>

        {/* Nút */}
        <button
          type="submit"
          className={`w-full mt-3 py-3 rounded-full text-white font-semibold text-sm ${
            side === "BUY"
              ? "bg-[#25a750] hover:bg-[#1e8e4a]"
              : "bg-[#ca3f64] hover:bg-[#a22d4d]"
          }`}
        >
          Mua {baseSymbol}
        </button>
      </form>
    </div>
  );
};

export default BuySell;
