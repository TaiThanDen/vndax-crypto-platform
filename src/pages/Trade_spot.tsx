import React, { useState } from "react";
import ChartTradingView from "../components/Trade/Trade_spot/ChartTradingView";
import BuySell from "../components/Trade/Trade_spot/BuySell";
import MenuBarCoin from "../components/Trade/Trade_spot/MenuBarCoin";
import OrderTabs from "@/components/Trade/Trade_spot/OrderTabs";
import OrderTable from "../components/Trade/Trade_spot/OrderTable";
import TradingViewWidget from "@/components/Trade/Trade_spot/TradingViewWidget";
import { IoMdClose } from "react-icons/io";

const MOBILE_TABS = [
  { key: "chart", label: "Biểu đồ" },
  { key: "orderbook", label: "Sổ lệnh" },
];

const Trade_spot: React.FC = () => {
  const [mobileTab, setMobileTab] = useState("chart");
  const [showBuySell, setShowBuySell] = useState(false);
  const [buySellType, setBuySellType] = useState<"buy" | "sell" | null>(null);

  return (
    <div className="bg-[#000] max-w-full text-white min-h-screen overflow-y-hidden">
      <MenuBarCoin />
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
        <div className="block md:hidden">
          {mobileTab === "chart" && (
            <>
              <ChartTradingView symbol="BTCUSDT" interval="15" />
              <div className="mt-2">
                <OrderTable />
              </div>
            </>
          )}
          {mobileTab === "orderbook" && <OrderTabs />}
          {mobileTab === "buysell" && <BuySell />}
        </div>
        <div className="hidden md:flex md:flex-row gap-2">
          {/* Chart panel */}
          <div className="rounded-xl flex flex-col overflow-hidden flex-1 min-w-[340px] max-w-[930px]">
            <TradingViewWidget />
          </div>
          {/* OrderBook panel */}
          <div className="flex flex-col w-[260px]">
            <OrderTabs />
          </div>
          {/* Buy/Sell panel */}
          <div className="flex flex-col w-[320px]">
            <BuySell />
          </div>
        </div>
        <div className="mt-4 hidden md:block">
          <OrderTable />
        </div>
      </div>
      {/* Footer mua bán cho mobile */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden bg-[#000] py-3 px-4 gap-4 z-50">
        <button
          className="flex-1 bg-green-500 rounded-full py-2 font-semibold"
          onClick={() => {
            setShowBuySell(true);
            setBuySellType("buy");
          }}
        >
          Mua
        </button>
        <button
          className="flex-1 bg-rose-500 rounded-full py-2 font-semibold"
          onClick={() => {
            setShowBuySell(true);
            setBuySellType("sell");
          }}
        >
          Bán
        </button>
      </div>
      {showBuySell && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-60">
          <div className="w-full max-w-md animate-slide-up relative">
            <button
              className="absolute right-2 top-1 text-3xl text-gray-400 hover:text-white z-10"
              onClick={() => setShowBuySell(false)}
              aria-label="Đóng"
            >
              <IoMdClose />
            </button>
            <BuySell type={buySellType} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trade_spot;
