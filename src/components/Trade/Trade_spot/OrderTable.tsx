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

const orders = [
  {
    id: 1,
    pair: "SAND/USDT",
    type: "Giới hạn",
    side: "Bán",
    time: "03/06/2025 11:09:57",
    price: "1.2",
    value: "$34,38",
    filled: "0 SAND",
    total: "17,181818 SAND",
    reduceOnly: "Không",
    status: "Chưa khớp lệnh",
    orderNo: "256...304",
    iceberg: "-",
    trigger: "-",
    sor: "-",
    tpsl: "-",
  },
];

const OrderTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="bg-[#000] rounded-xl min-h-[540px] flex flex-col border border-[#23262F] text-white text-[15px]">
      {/* Tabs */}
      <div className="flex border-b border-[#23262F]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-5 py-4 font-semibold relative transition text-[12px] outline-none ${
              activeTab === tab.key
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
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
      <div className="flex-1 relative px-3 overflow-y-auto">
        {activeTab === "open" ? (
          <>
            {/* Desktop */}
            <div className="hidden md:flex flex-col">
              <div className="py-2 border-b border-[#23262F] text-xs font-medium text-gray-300">
                <div className="flex">
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
              </div>

              <div className="flex flex-col">
                {orders.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-8">
                    <FaRegFileAlt className="text-5xl text-gray-600 mb-4" />
                    <div className="text-lg text-gray-400">
                      You have no open orders.
                    </div>
                  </div>
                ) : (
                  orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex py-2 border-b border-[#23262F] text-xs items-center hover:bg-[#181a20] transition"
                    >
                      <div className="flex-1">{order.time}</div>
                      <div className="flex-1">{order.pair}</div>
                      <div className="flex-1">{order.type}</div>
                      <div
                        className={`flex-1 font-bold ${
                          order.side === "Mua"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {order.side}
                      </div>
                      <div className="flex-1">{order.price}</div>
                      <div className="flex-1">{order.value}</div>
                      <div className="flex-1">-</div>
                      <div className="flex-1">{order.filled}</div>
                      <div className="flex-1">{order.total}</div>
                      <div className="flex-1">-</div>
                      <div className="flex-1">-</div>
                      <div className="flex-1">-</div>
                      <div className="flex-1 text-right pr-3">
                        <button className="text-vndax-green font-semibold hover:underline">
                          Hủy
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden space-y-3 py-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#000] rounded-lg p-3 shadow border border-[#23262F] text-xs"
                >
                  <div className="flex justify-between font-semibold mb-1">
                    <span>{order.pair}</span>
                    <span
                      className={`${
                        order.side === "Mua" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {order.side}
                    </span>
                  </div>
                  <div className="text-gray-400 mb-1">{order.time}</div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <div>
                      <span className="text-gray-400">Loại: </span>
                      {order.type}
                    </div>
                    <div>
                      <span className="text-gray-400">Giá: </span>
                      {order.price}
                    </div>
                    <div>
                      <span className="text-gray-400">Giá trị lệnh: </span>
                      {order.value}
                    </div>
                    <div>
                      <span className="text-gray-400">Khớp lệnh: </span>
                      {order.filled}
                    </div>
                    <div>
                      <span className="text-gray-400">Tổng: </span>
                      {order.total}
                    </div>
                    <div>
                      <span className="text-gray-400">Reduce-only: </span>
                      {order.reduceOnly}
                    </div>
                    <div>
                      <span className="text-gray-400">Trạng thái: </span>
                      {order.status}
                    </div>
                    <div>
                      <span className="text-gray-400">Số: </span>
                      {order.orderNo}
                    </div>
                  </div>
                  <div className="flex justify-end mt-2 gap-2">
                    <button className="text-[#4ade80] font-semibold">
                      Hủy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            No data.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
