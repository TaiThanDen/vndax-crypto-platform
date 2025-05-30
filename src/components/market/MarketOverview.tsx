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

export default function MarketOverview() {
  return (
    <div className="w-full mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Coin nổi bật */}
      <div className="bg-[#181A20] rounded-xl p-4 flex flex-col gap-2 border-spacing-2 border border-[#2b3139]">
        <span className="text-gray-400 text-xs mb-2">Coin nổi bật</span>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenBNB className="w-5 h-5" />
            <span className="font-semibold">BNB</span>
          </span>
          <span className="text-sm">$669.69</span>
          <span className="text-red-500 text-sm">-2.13%</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenBTC className="w-5 h-5" />
            <span className="font-semibold">BTC</span>
          </span>
          <span className="text-sm">$105.56K</span>
          <span className="text-red-500 text-sm">-2.22%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <TokenETH className="w-5 h-5" />
            <span className="font-semibold">ETH</span>
          </span>
          <span className="text-sm">$2.62K</span>
          <span className="text-red-500 text-sm">-3.78%</span>
        </div>
      </div>
      {/* Niêm yết mới */}
      <div className="bg-[#181A20] rounded-xl p-4 flex flex-col border-spacing-2 border border-[#2b3139]">
        <span className="text-gray-400 text-xs mb-2">Niêm yết mới</span>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenSOPH
              className="w-5 h-5"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-semibold">SOPH</span>
          </span>
          <span className="text-sm">$0.05309</span>
          <span className="text-red-500 text-sm">-18.08%</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenHMND
              className="w-5 h-5"
              //   style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-semibold">HMND</span>
          </span>
          <span className="text-sm">$0.04564</span>
          <span className="text-red-500 text-sm">-16.79%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <TokenDOLA
              className="w-5 h-5"
              //   style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-semibold">DOLA</span>
          </span>
          <span className="text-sm">$0.9999</span>
          <span className="text-red-500 text-sm">-0.04%</span>
        </div>
      </div>
      {/* Top coin tăng giá */}
      <div className="bg-[#181A20] rounded-xl p-4 flex flex-col border-spacing-2 border border-[#2b3139]">
        <span className="text-gray-400 text-xs mb-2">Top coin tăng giá</span>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenLPT className="w-5 h-5" />
            <span className="font-semibold">LPT</span>
          </span>
          <span className="text-sm">$7.44</span>
          <span className="text-green-500 text-sm">+33.73%</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenDEXE className="w-5 h-5" />
            <span className="font-semibold">DEXE</span>
          </span>
          <span className="text-sm">$14.06</span>
          <span className="text-green-500 text-sm">+12.92%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <TokenPART className="w-5 h-5" />
            <span className="font-semibold">PART</span>
          </span>
          <span className="text-sm">$0.2787</span>
          <span className="text-green-500 text-sm">+11.39%</span>
        </div>
      </div>
      {/* KL giao dịch nhiều nhất */}
      <div className="bg-[#181A20] rounded-xl p-4 flex flex-col border-spacing-2 border border-[#2b3139]">
        <span className="text-gray-400 text-xs mb-2">
          Coin có KL giao dịch nhiều nhất
        </span>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenBTC className="w-5 h-5" />
            <span className="font-semibold">BTC</span>
          </span>
          <span className="text-sm">$105.56K</span>
          <span className="text-red-500 text-sm">-2.22%</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="flex items-center gap-2">
            <TokenETH className="w-5 h-5" />
            <span className="font-semibold">ETH</span>
          </span>
          <span className="text-sm">$2.62K</span>
          <span className="text-red-500 text-sm">-3.78%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <TokenSOL className="w-5 h-5" />
            <span className="font-semibold">SOL</span>
          </span>
          <span className="text-sm">$163.30</span>
          <span className="text-red-500 text-sm">-5.31%</span>
        </div>
      </div>
    </div>
  );
}
