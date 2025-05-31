import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const tabs = [
  { key: "open", label: "Open Orders(2)" },
  { key: "orderHistory", label: "Order History" },
  { key: "tradeHistory", label: "Trade History" },
  { key: "funds", label: "Funds" },
  { key: "gridOrders", label: "Grid Orders" },
];

const tableHeaders = [
  "Date",
  "Pair",
  "Type",
  "Side",
  "Price",
  "Amount",
  "Amount per Iceberg Order",
  "Filled",
  "Total",
  "Trigger Conditions",
  "SOR",
  "TP/SL",
  "Cancel All",
];

// Dữ liệu mẫu
const sampleOrders = [
  {
    date: "2024-05-31 14:20:01",
    pair: "BTC/USDT",
    type: "Limit",
    side: "Buy",
    price: "103,500.00",
    amount: "0.005",
    iceberg: "-",
    filled: "0",
    total: "517.50",
    trigger: "-",
    sor: "-",
    tpsl: "-",
  },
  {
    date: "2024-05-31 13:55:12",
    pair: "ETH/USDT",
    type: "Market",
    side: "Sell",
    price: "3,800.00",
    amount: "0.2",
    iceberg: "-",
    filled: "0.1",
    total: "760.00",
    trigger: "-",
    sor: "-",
    tpsl: "-",
  },
];

const OrderTable = () => {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="bg-[#000] rounded-xl h-[540px] flex flex-col border border-[#23262F] text-white text-[15px]">
      {/* Tabs */}
      <div className="flex border-b border-[#23262F]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-5 py-4 font-semibold relative transition text-[15px] outline-none
              ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }
            `}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-vndax-green rounded-t"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 relative px-3">
        {activeTab === "open" && (
          <div className="w-full h-full flex flex-col">
            {/* Table header */}
            <div className="flex py-2 border-b border-[#23262F] text-xs font-medium text-gray-300">
              {tableHeaders.map((header) => (
                <div
                  key={header}
                  className={`${
                    header === "Cancel All"
                      ? "flex-1 text-right pr-3 text-vndax-green cursor-pointer"
                      : "flex-1"
                  }`}
                >
                  {header}
                </div>
              ))}
            </div>
            {/* Table body với dữ liệu mẫu */}
            {sampleOrders.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center">
                <FaRegFileAlt className="text-5xl text-gray-600 mb-4" />
                <div className="text-lg text-gray-400">
                  You have no open orders.
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto">
                {sampleOrders.map((order, idx) => (
                  <div
                    key={idx}
                    className="flex py-2 border-b border-[#23262F] text-xs items-center hover:bg-[#181a20] transition"
                  >
                    <div className="flex-1">{order.date}</div>
                    <div className="flex-1">{order.pair}</div>
                    <div className="flex-1">{order.type}</div>
                    <div
                      className={`flex-1 font-bold ${
                        order.side === "Buy"
                          ? "text-[#25a750]"
                          : "text-[#ca3f64]"
                      }`}
                    >
                      {order.side}
                    </div>
                    <div className="flex-1">{order.price}</div>
                    <div className="flex-1">{order.amount}</div>
                    <div className="flex-1">{order.iceberg}</div>
                    <div className="flex-1">{order.filled}</div>
                    <div className="flex-1">{order.total}</div>
                    <div className="flex-1">{order.trigger}</div>
                    <div className="flex-1">{order.sor}</div>
                    <div className="flex-1">{order.tpsl}</div>
                    <div className="flex-1 text-right pr-3 text-vndax-green cursor-pointer hover:underline">
                      Cancel
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Các tab khác để trống */}
        {activeTab !== "open" && (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            No data.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
