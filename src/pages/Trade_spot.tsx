import React, { useState } from "react";
import ChartTradingView from "../components/Trade/Trade_spot/ChartTradingView";
import BuySell from "../components/Trade/Trade_spot/BuySell";
import MenuBarCoin from "../components/Trade/Trade_spot/MenuBarCoin";
import OrderTabs from "@/components/Trade/Trade_spot/OrderTabs";
import OrderTable from "../components/Trade/Trade_spot/OrderTable";

const MOBILE_TABS = [
  { key: "chart", label: "Biểu đồ" },
  { key: "orderbook", label: "Sổ lệnh" },
  { key: "history", label: "Lịch sử" },
  { key: "buysell", label: "Mua/Bán" },
];

const Trade_spot: React.FC = () => {
  const [mobileTab, setMobileTab] = useState("chart");

  return (
    <div className="bg-[#000] text-white min-h-screen overflow-y-hidden">
      <MenuBarCoin symbol="BTCUSDT" />
      {/* Tabs chỉ hiện trên mobile */}
      <div className="flex md:hidden border-b border-[#23262F]">
        {MOBILE_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`flex-1 py-3 font-semibold text-xs ${
              mobileTab === tab.key
                ? "text-[#4ade80] border-b-2 border-[#4ade80]"
                : "text-gray-400"
            }`}
            onClick={() => setMobileTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full mx-auto pt-4 px-1">
        {/* Mobile: chỉ hiển thị 1 tab, Desktop: hiển thị layout cũ */}
        <div className="block md:hidden">
          {mobileTab === "chart" && (
            <ChartTradingView symbol="BTCUSDT" interval="15" />
          )}
          {mobileTab === "orderbook" && <OrderTabs />}
          {mobileTab === "history" && <OrderTable />}
          {mobileTab === "buysell" && <BuySell />}
        </div>
        <div className="hidden md:flex flex-col gap-2 md:flex-row">
          {/* Chart panel */}
          <div className="rounded-xl flex flex-col overflow-hidden w-full md:flex-1 min-w-[220px] md:min-w-[340px] md:max-w-[930px]">
            <ChartTradingView
              symbol="BTCUSDT"
              interval="15"
              width="100%"
              height={400}
            />
          </div>
          {/* OrderBook panel */}
          <div className="w-full md:w-[260px] flex flex-col mt-2 md:mt-0">
            <OrderTabs />
          </div>
          {/* Buy/Sell panel */}
          <div className="w-full md:w-[320px] flex flex-col mt-2 md:mt-0">
            <div className="flex-1">
              <BuySell />
            </div>
          </div>
        </div>
        <div className="mt-4 hidden md:block">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default Trade_spot;
