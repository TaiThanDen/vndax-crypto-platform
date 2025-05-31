import { FaStar } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";

const MenuBarCoin = ({
  symbol = "BTCUSDT",
  price = "103,324.37",
  change = "-2.31%",
  btcPrice = "103,324.37",
  low24h = "103,068.55",
  high24h = "106,000.00",
  vol24h = "18,006.13",
  val24h = "1881.33M",
}) => {
  const isDown = String(change).startsWith("-");

  return (
    <div className="w-full bg-[#181a20] px-4 py-3 border-b border-[#23262F] rounded-t-lg">
      {/* Header */}
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-[#f7931a] flex items-center justify-center mr-3">
          <FaBitcoin className="text-white text-lg" />
        </div>
        <span className="font-bold text-2xl text-white mr-2">{symbol}</span>
        <FaStar className="text-gray-400 cursor-pointer mr-2" />
      </div>

      {/* Giá + thay đổi */}
      <div className="flex items-center mt-1">
        <span className="text-3xl font-bold text-[#ca3f64] mr-3">{price}</span>
        <span className="text-white text-[15px] mr-2">${btcPrice}</span>
        <span
          className={`text-[15px] font-semibold ${
            isDown ? "text-[#ca3f64]" : "text-[#25a750]"
          }`}
        >
          {change}
        </span>
      </div>

      {/* Các thông số chia 2 cột, mỗi cột 2 dòng */}
      <div className="grid grid-cols-2 gap-y-1 gap-x-12 mt-4">
        <div className="flex flex-col items-start">
          <span className="text-[#a7b1bc] text-[15px]">24h High</span>
          <span className="text-white text-lg font-semibold">{high24h}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#a7b1bc] text-[15px]">24h Vol(BTC)</span>
          <span className="text-white text-lg font-semibold">{vol24h}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#a7b1bc] text-[15px]">24h Low</span>
          <span className="text-white text-lg font-semibold">{low24h}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[#a7b1bc] text-[15px]">24h Vol(USDT)</span>
          <span className="text-white text-lg font-semibold">{val24h}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBarCoin;
