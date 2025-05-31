import React, { useEffect, useState } from "react";
import { fetchOrderBook } from "../../api/binance";

interface OrderBookProps {
  symbol?: string;
  limit?: number;
}

type Order = [string, string];

function calcTotal(orders: Order[]) {
  let sum = 0;
  return orders.map(([p, q]) => {
    sum += parseFloat(q);
    return sum;
  });
}

const OrderBook: React.FC<OrderBookProps> = ({
  symbol = "BTCUSDT",
  limit = 18,
}) => {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchOrderBook(symbol, limit);
        if (isMounted) {
          setBids(data.bids.slice(0, limit / 2));
          setAsks(data.asks.slice(0, limit / 2));
        }
      } finally {
        setLoading(false);
      }
    };
    load();
    const interval = setInterval(load, 1500);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [symbol, limit]);

  const askTotals = calcTotal(asks.slice().reverse());
  const bidTotals = calcTotal(bids);
  const maxTotal = Math.max(
    askTotals[askTotals.length - 1] || 1,
    bidTotals[bidTotals.length - 1] || 1
  );
  const totalBid = bidTotals[bidTotals.length - 1] || 1;
  const totalAsk = askTotals[askTotals.length - 1] || 1;
  const bidPercent = ((totalBid / (totalBid + totalAsk)) * 100).toFixed(2);
  const askPercent = ((totalAsk / (totalBid + totalAsk)) * 100).toFixed(2);

  return (
    <div className="w-full px-2 pb-2">
      {/* Toolbar mini */}
      <div className="flex items-center justify-between text-xs text-gray-400 py-1 mb-1">
        <div className="flex items-center gap-1">
          <span className="cursor-pointer px-1 rounded hover:bg-[#282e3a]">
            <svg height="15" width="15" viewBox="0 0 16 16" className="inline">
              <rect width="16" height="7" fill="#5d6a7a" />
              <rect y="9" width="16" height="7" fill="#5d6a7a" />
            </svg>
          </span>
          <span className="cursor-pointer px-1 rounded hover:bg-[#282e3a]">
            <svg height="15" width="15" viewBox="0 0 16 16" className="inline">
              <rect width="7" height="16" fill="#5d6a7a" />
              <rect x="9" width="7" height="16" fill="#5d6a7a" />
            </svg>
          </span>
        </div>
        <div className="font-bold">0,1</div>
        <span className="cursor-pointer">
          <svg width="17" height="17" fill="#5d6a7a" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </span>
      </div>
      {/* Table header */}
      <div className="flex text-gray-300 font-semibold border-b border-[#282e3a] pb-1">
        <div className="flex-1 text-right">Giá (USDT)</div>
        <div className="flex-1 text-right">Số (BTC)</div>
        <div className="flex-1 text-right">Tổng (BTC)</div>
      </div>
      {/* Asks */}
      <div>
        {asks
          .slice()
          .reverse()
          .map(([price, qty], i) => (
            <div
              key={"ask" + i}
              className="relative flex items-center py-[2.2px]"
              style={{
                background: `linear-gradient(to left, #ca3f6422 ${
                  (askTotals[i] / maxTotal) * 100
                }%, transparent 0)`,
              }}
            >
              <div className="flex-1 text-right text-[#ca3f64] pr-2">
                {parseFloat(price).toLocaleString()}
              </div>
              <div className="flex-1 text-right text-gray-200">
                {parseFloat(qty).toLocaleString()}
              </div>
              <div className="flex-1 text-right text-gray-400">
                {askTotals[i].toFixed(5)}
              </div>
            </div>
          ))}
      </div>
      {/* Mid price */}
      <div className="flex items-center justify-center py-2 font-bold text-lg border-y border-[#282e3a] bg-black/70 mb-1">
        <span className="text-[#25a750] mr-2">
          {bids[0] ? parseFloat(bids[0][0]).toLocaleString() : "--"}
        </span>
        <span className="text-xs text-[#25a750]">↑</span>
      </div>
      {/* Bids */}
      <div>
        {bids.map(([price, qty], i) => (
          <div
            key={"bid" + i}
            className="relative flex items-center py-[2.2px]"
            style={{
              background: `linear-gradient(to left, #25a75022 ${
                (bidTotals[i] / maxTotal) * 100
              }%, transparent 0)`,
            }}
          >
            <div className="flex-1 text-right text-[#25a750] pr-2">
              {parseFloat(price).toLocaleString()}
            </div>
            <div className="flex-1 text-right text-gray-200">
              {parseFloat(qty).toLocaleString()}
            </div>
            <div className="flex-1 text-right text-gray-400">
              {bidTotals[i].toFixed(5)}
            </div>
          </div>
        ))}
      </div>
      {/* Footer tỷ lệ */}
      <div className="flex items-center gap-1 mt-2 text-xs">
        <div className="flex-1 flex items-center bg-[#173622] text-[#25a750] rounded-l px-2 py-1">
          <span className="font-bold">B</span>
          <span className="ml-1">{bidPercent}%</span>
        </div>
        <div className="flex-1 flex items-center justify-end bg-[#3e1c26] text-[#ca3f64] rounded-r px-2 py-1">
          <span className="mr-1">{askPercent}%</span>
          <span className="font-bold">S</span>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
