import {
  TokenBNB,
  TokenBTC,
  TokenETH,
  TokenSOL,
  TokenSOPH,
  TokenHMND,
  TokenDOLA,
  TokenLPT,
  TokenDEXE,
  TokenPART,
} from "@web3icons/react";

// Map tên coin với icon
const tokenIcons: Record<string, React.ElementType> = {
  BNB: TokenBNB,
  BTC: TokenBTC,
  ETH: TokenETH,
  SOL: TokenSOL,
  SOPH: TokenSOPH,
  HMND: TokenHMND,
  DOLA: TokenDOLA,
  LPT: TokenLPT,
  DEXE: TokenDEXE,
  PART: TokenPART,
};

// Dữ liệu mẫu (có thể fetch từ API)
const marketData = [
  {
    title: "Coin nổi bật",
    coins: [
      { symbol: "BNB", price: "$669.69", change: -2.13 },
      { symbol: "BTC", price: "$105.56K", change: -2.22 },
      { symbol: "ETH", price: "$2.62K", change: -3.78 },
    ],
  },
  {
    title: "Niêm yết mới",
    coins: [
      { symbol: "SOPH", price: "$0.05309", change: -18.08 },
      { symbol: "HMND", price: "$0.04564", change: -16.79 },
      { symbol: "DOLA", price: "$0.9999", change: -0.04 },
    ],
  },
  {
    title: "Top coin tăng giá",
    coins: [
      { symbol: "LPT", price: "$7.44", change: 33.73 },
      { symbol: "DEXE", price: "$14.06", change: 12.92 },
      { symbol: "PART", price: "$0.2787", change: 11.39 },
    ],
  },
  {
    title: "Coin có KL giao dịch nhiều nhất",
    coins: [
      { symbol: "BTC", price: "$105.56K", change: -2.22 },
      { symbol: "ETH", price: "$2.62K", change: -3.78 },
      { symbol: "SOL", price: "$163.30", change: -5.31 },
    ],
  },
];

export default function MarketOverview() {
  return (
    <div className="w-full mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {marketData.map((section) => (
        <div
          key={section.title}
          className="bg-[#181A20] rounded-xl p-4 flex flex-col gap-2 border-spacing-2 border border-[#2b3139]"
        >
          <span className="text-gray-400 text-xs mb-2">{section.title}</span>
          {section.coins.map((coin, idx) => {
            const Icon = tokenIcons[coin.symbol];
            return (
              <div
                key={coin.symbol}
                className={`flex items-center justify-between ${
                  idx < 2 ? "mb-1" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{coin.symbol}</span>
                </span>
                <span className="text-sm">{coin.price}</span>
                <span
                  className={`text-sm ${
                    coin.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.change > 0 ? "+" : ""}
                  {coin.change}%
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
