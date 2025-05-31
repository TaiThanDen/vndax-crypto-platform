import React, { useState } from "react";

interface BuySellProps {
  symbol?: string;
}

const BuySell: React.FC<BuySellProps> = ({ symbol = "BTCUSDT" }) => {
  const [side, setSide] = useState<"BUY" | "SELL">("BUY");
  const [price, setPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || !amount) {
      setMessage("Vui lòng nhập đầy đủ giá và số lượng!");
      return;
    }
    setMessage(
      `Đã tạo lệnh ${side === "BUY" ? "Mua" : "Bán"} ${amount} ${symbol.replace(
        "USDT",
        ""
      )} với giá ${price} USDT`
    );
    setPrice("");
    setAmount("");
    setPercent(0);
    setTimeout(() => setMessage(""), 3500);
  };

  // Tính tổng USDT
  const total =
    price && amount ? (parseFloat(price) * parseFloat(amount)).toFixed(2) : "";

  return (
    <div className=" rounded-xl pl-4 py-4 px-4 w-auto max-w-[300px] h-[537px] border border-[#23262F]">
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-lg font-bold text-[16px]  transition ${
            side === "BUY"
              ? "bg-[#25a750] text-white"
              : "bg-[#23262F] text-white"
          }`}
          onClick={() => setSide("BUY")}
          type="button"
        >
          Mua
        </button>
        <button
          className={`flex-1 py-2 rounded-lg font-bold text-[16px] transition ${
            side === "SELL"
              ? "bg-[#ca3f64] text-white"
              : "bg-[#23262F] text-white"
          }`}
          onClick={() => setSide("SELL")}
          type="button"
        >
          Bán
        </button>
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Giá (USDT)</label>
          <input
            type="number"
            min={0}
            className="w-full bg-[#23262F] text-white rounded-lg p-3 border border-[#23262F] focus:border-[#4ade80] outline-none text-[16px]"
            placeholder="Nhập giá"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            Số lượng ({symbol.replace("USDT", "")})
          </label>
          <input
            type="number"
            min={0}
            className="w-full bg-[#23262F] text-white rounded-lg p-3 border border-[#23262F] focus:border-[#4ade80] outline-none text-[16px]"
            placeholder="Tối thiểu 0,00001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {/* Slider chọn % */}
        <div className="flex items-center gap-2 mt-1">
          <input
            type="range"
            min={0}
            max={100}
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            className="w-full accent-[#4ade80] h-1"
          />
          <span className="text-xs text-gray-400">{percent}%</span>
        </div>
        {/* Tổng USDT */}
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            Tổng (USDT)
          </label>
          <input
            className="w-full bg-[#23262F] text-white rounded-lg p-3 border border-[#23262F] outline-none text-[16px]"
            value={total}
            readOnly
            placeholder="0.00"
          />
        </div>
        {/* Dòng phụ */}
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>
            Khả dụng <span className="text-white">-- USDT</span>
          </span>
          <span>
            Mua tối đa{" "}
            <span className="text-white">-- {symbol.replace("USDT", "")}</span>
          </span>
        </div>
        <button
          type="submit"
          className={`mt-24 py-3 rounded-lg text-white font-bold text-[16px] transition ${
            side === "BUY"
              ? "bg-[#25a750] hover:bg-[#1e8e4a]"
              : "bg-[#ca3f64] hover:bg-[#a22d4d]"
          }`}
        >
          Đặt lệnh {side === "BUY" ? "Mua" : "Bán"}
        </button>
        {message && (
          <div
            className={`mt-2 rounded px-2 py-1 text-sm text-center ${
              side === "BUY"
                ? "bg-[#25a75022] text-[#25a750]"
                : "bg-[#ca3f6422] text-[#ca3f64]"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default BuySell;
