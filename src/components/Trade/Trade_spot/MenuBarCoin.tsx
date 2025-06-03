import { FaStar } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { useEffect, useState } from "react";

const MenuBarCoin = () => {
  const [coinInfo, setCoinInfo] = useState({
    symbol: "BTCUSDT",
    price: "0",
    change: "0",
    btcPrice: "0",
    low24h: "0",
    high24h: "0",
    vol24h: "0",
    val24h: "0",
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
        .then((res) => res.json())
        .then((data) => {
          setCoinInfo({
            symbol: data.symbol,
            price: Number(data.lastPrice).toLocaleString(),
            change: `${Number(data.priceChangePercent).toFixed(2)}%`,
            btcPrice: Number(data.lastPrice).toLocaleString(),
            low24h: Number(data.lowPrice).toLocaleString(),
            high24h: Number(data.highPrice).toLocaleString(),
            vol24h: Number(data.volume).toLocaleString(),
            val24h: Number(data.quoteVolume).toLocaleString(),
          });
        });
    };

    fetchData(); // Lấy dữ liệu lần đầu
    const interval = setInterval(fetchData, 2000); // Lấy lại mỗi 2 giây

    return () => clearInterval(interval); // Clear interval khi unmount
  }, []);

  const { symbol, price, change, btcPrice, low24h, high24h, vol24h, val24h } =
    coinInfo;
  const isDown = String(change).startsWith("-");

  return (
    <div className="w-full bg-[#000] px-4 py-3 border-b border-[#23262F] rounded-t-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Left: Symbol + Giá */}
        <div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#f7931a] flex items-center justify-center mr-3">
              <FaBitcoin className="text-white text-lg" />
            </div>
            <span className="font-bold text-2xl text-white mr-2">{symbol}</span>
            <FaStar className="text-gray-400 cursor-pointer mr-2" />
          </div>
          <div className="flex items-center mt-1">
            <span className="text-3xl font-bold text-[#ca3f64] mr-3">
              {price}
            </span>
            <span className="text-white text-[15px] mr-2">${btcPrice}</span>
            <span
              className={`text-[15px] font-semibold ${
                isDown ? "text-[#ca3f64]" : "text-[#25a750]"
              }`}
            >
              {change}
            </span>
          </div>
        </div>

        {/* Right: Các thông số */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-6 mt-4 md:mt-0 w-full md:w-auto">
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
    </div>
  );
};

export default MenuBarCoin;
