import React, { useState } from "react";
import OrderBook from "./OrderBook";
import HistoryOrderTable from "./HistoryOrderTable";

const OrderTabs: React.FC = () => {
  const [tab, setTab] = useState<"orderbook" | "history">("orderbook");

  return (
    <div className=" rounded-xl h-[537px] flex flex-col border border-[#25293c]">
      {/* Tabs & header */}
      <div className="flex border-b ">
        <button
          className={`flex-1 py-2 text-[15px] font-semibold transition ${
            tab === "orderbook"
              ? "text-white border-b-2 border-[#4ade80] "
              : "text-gray-400  hover:text-white"
          }`}
          onClick={() => setTab("orderbook")}
        >
          Sổ lệnh
        </button>
        <button
          className={`flex-1 py-2 text-[15px] font-semibold transition ${
            tab === "history"
              ? "text-white border-b-2 border-[#4ade80] "
              : "text-gray-400  hover:text-white"
          }`}
          onClick={() => setTab("history")}
        >
          Lịch sử giao dịch
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-0">
        {tab === "orderbook" ? (
          <OrderBook symbol="BTCUSDT" limit={12} />
        ) : (
          <HistoryOrderTable symbol="BTCUSDT" limit={1} />
        )}
      </div>
    </div>
  );
};

export default OrderTabs;
