import React, { useState, useEffect } from "react";
import MiniCoinChart from "../MiniCoinChart";
import {
  TokenBTC,
  TokenETH,
  TokenSOL,
  TokenADA,
  TokenXRP,
  TokenBNB,
  TokenDOGE,
  TokenDOT,
  TokenMATIC,
  TokenSHIB,
  TokenAVAX,
  TokenTRX,
  TokenLINK,
  TokenLTC,
  TokenBCH,
  TokenATOM,
  TokenXLM,
  TokenFIL,
  TokenEGLD,
  TokenSAND,
  TokenMANA,
  TokenAAVE,
  TokenNEAR,
  TokenALGO,
  TokenXTZ,
  TokenTHETA,
  TokenVET,
  TokenEOS,
  TokenFTM,
  TokenCAKE,
  TokenGRT,
  TokenENJ,
  TokenCHZ,
  TokenCRV,
  Token1INCH,
  TokenCOMP,
  TokenZRX,
  TokenSUSHI,
  TokenREN,
  TokenRSR,
  TokenUNI,
  TokenSUI,
} from "@web3icons/react";
import MarketOverview from "./MarketOverview";

// Map symbol sang component icon
const iconMap: Record<string, React.ElementType> = {
  BTCUSDT: TokenBTC,
  ETHUSDT: TokenETH,
  SOLUSDT: TokenSOL,
  ADAUSDT: TokenADA,
  XRPUSDT: TokenXRP,
  BNBUSDT: TokenBNB,
  DOGEUSDT: TokenDOGE,
  DOTUSDT: TokenDOT,
  MATICUSDT: TokenMATIC,
  SHIBUSDT: TokenSHIB,
  AVAXUSDT: TokenAVAX,
  TRXUSDT: TokenTRX,
  LINKUSDT: TokenLINK,
  LTCUSDT: TokenLTC,
  BCHUSDT: TokenBCH,
  ATOMUSDT: TokenATOM,
  XLMUSDT: TokenXLM,
  FILUSDT: TokenFIL,
  EGLDUSDT: TokenEGLD,
  SANDUSDT: TokenSAND,
  MANAUSDT: TokenMANA,
  AAVEUSDT: TokenAAVE,
  NEARUSDT: TokenNEAR,
  ALGOUSDT: TokenALGO,
  XTZUSDT: TokenXTZ,
  THETAUSDT: TokenTHETA,
  VETUSDT: TokenVET,
  EOSUSDT: TokenEOS,
  FTMUSDT: TokenFTM,
  CAKEUSDT: TokenCAKE,
  GRTUSDT: TokenGRT,
  ENJUSDT: TokenENJ,
  CHZUSDT: TokenCHZ,
  CRVUSDT: TokenCRV,
  "1INCHUSDT": Token1INCH,
  COMPUSDT: TokenCOMP,
  ZRXUSDT: TokenZRX,
  SUSHIUSDT: TokenSUSHI,
  RENUSDT: TokenREN,
  RSRUSDT: TokenRSR,
  SUIUSDT: TokenSUI,
  UNIUSDT: TokenUNI,
};

const TABS = [
  { key: "spot", label: "Spot" },
  { key: "futures", label: "Futures" },
  { key: "margin", label: "Ký quỹ" },
];

const PAGE_SIZE = 10; // Số dòng mỗi trang

export default function MarketTable() {
  const [activeTab, setActiveTab] = useState("spot");
  const [page, setPage] = useState(1);
  const [coinData, setCoinData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    )
      .then((res) => res.json())
      .then((data) => {
        // Chuẩn hóa dữ liệu cho phù hợp với table
        setCoinData(
          data.map((coin: any) => ({
            symbol: coin.symbol.toUpperCase() + "USDT",
            name: coin.name,
            price: coin.current_price,
            change: coin.price_change_percentage_24h?.toFixed(2),
            volume: coin.total_volume?.toLocaleString(),
            chart: coin.sparkline_in_7d?.price || [],
          }))
        );
        setLoading(false);
      });
  }, []);

  // Tính toán dữ liệu cho trang hiện tại
  const totalPage = Math.ceil(coinData.length / PAGE_SIZE);
  const pagedData = coinData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-[#151517 ] px-2 md:px-0">
      <div className="w-full max-w-6xl">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Market Overview
        </h1>
        <MarketOverview />

        {/* Tabs + Search Row */}
        <div className="flex items-center gap-4 mb-4 border-b border-[#23262F]">
          {/* Tabs: chiếm 2/3 */}
          <div className="flex gap-6 w-2/3">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`py-2 font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "text-green-500 text-2xl border-b-2 border-green-500"
                    : "text-white text-base"
                }`}
                style={{ outline: "none", background: "none", border: "none" }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Search: chiếm 1/3 */}
          <div className="w-1/3 max-w-sm ml-auto">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                className="w-full bg-transparent rounded-full placeholder:text-slate-400 text-white text-sm border border-slate-200 pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search coin"
              />
            </div>
          </div>
        </div>
        {/* End Tabs */}

        {/* Table market */}
        <table className="w-full bg-[#181A20] text-white rounded-xl overflow-hidden">
          <thead>
            <tr className="text-gray-400 text-xs md:text-sm border-b border-[#23262F]">
              <th className="py-3 px-3 text-left font-medium">Name</th>
              <th className="py-3 px-3 text-right font-medium">Last price</th>
              <th className="py-3 px-3 text-right font-medium hidden sm:table-cell">
                Change
              </th>
              <th className="py-3 px-3 text-right font-medium">Cap</th>
              <th className="py-3 px-3 text-center font-medium hidden md:table-cell">
                24h Chart
              </th>
              <th className="py-3 px-3 text-center font-medium hidden md:table-cell">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-8">
                  Loading...
                </td>
              </tr>
            ) : (
              pagedData.map((coin) => {
                const Icon = iconMap[coin.symbol];
                return (
                  <tr
                    key={coin.symbol}
                    className="border-b border-[#23262F] hover:bg-[#23262F] transition text-xs md:text-sm"
                  >
                    {/* Name */}
                    <td className="py-2 px-3 font-semibold align-middle">
                      <span className="inline-flex items-center">
                        {Icon ? (
                          <Icon className="w-7 h-7 rounded-full text-base" />
                        ) : (
                          <span className="w-7 h-7 bg-gray-700 rounded-full inline-block" />
                        )}
                        <span className="ml-2 flex flex-col leading-tight ">
                          <span>{coin.symbol}</span>
                          <span className="text-[10px] text-gray-400 text-sm">
                            {coin.name}
                          </span>
                        </span>
                      </span>
                    </td>
                    {/* Last price */}
                    <td className="py-2 px-3 text-right align-middle whitespace-nowrap">
                      {coin.price.toLocaleString()}
                      {/* Mobile: Show % change dưới last price */}
                      <div
                        className={`mt-1 text-[11px] ${
                          coin.change < 0 ? "text-red-500" : "text-green-500"
                        } sm:hidden`}
                      >
                        {coin.change > 0 ? "+" : ""}
                        {coin.change}%
                      </div>
                    </td>
                    {/* Change: chỉ desktop */}
                    <td
                      className={`py-2 px-3 text-right align-middle ${
                        coin.change < 0 ? "text-red-500" : "text-green-500"
                      } hidden sm:table-cell`}
                    >
                      {coin.change > 0 ? "+" : ""}
                      {coin.change}%
                    </td>
                    {/* Cap */}
                    <td className="py-2 px-3 text-right align-middle whitespace-nowrap">
                      {coin.volume}
                    </td>
                    {/* Chart: desktop only */}
                    <td className="py-2 px-3 text-center align-middle hidden md:table-cell">
                      <div
                        style={{
                          width: 172,
                          height: 70,
                          margin: "0 auto",
                          overflow: "hidden",
                        }}
                      >
                        <MiniCoinChart
                          data={coin.chart}
                          height={70}
                          width={172}
                          color={coin.change < 0 ? "#ef4444" : "#22c55e"}
                        />
                      </div>
                    </td>
                    {/* Action: desktop only */}
                    <td className="py-2 px-3 text-center align-middle hidden md:table-cell">
                      <button className="text-vndax-green font-semibold hover:underline mr-2">
                        Details
                      </button>
                      <button className="text-white font-semibold hover:underline">
                        Trade
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-end gap-2 mt-6">
          <button
            className="px-3 py-1 rounded bg-[#23262F] text-white disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPage }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-full  ${
                page === i + 1
                  ? "bg-green-500 text-white"
                  : "bg-[#23262F] text-white"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-[#23262F] text-white disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPage, p + 1))}
            disabled={page === totalPage}
          >
            &gt;
          </button>
        </div>
        {/* End Pagination */}
      </div>
    </div>
  );
}
