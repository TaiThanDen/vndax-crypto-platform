import React, { useEffect, useState } from "react";
import { fetchTradeHistory } from "../../api/binance";
import { Trade } from "../../../types/index";

interface OrderTableProps {
  symbol?: string;
  limit?: number;
}

const HistoryOrderTable: React.FC<OrderTableProps> = ({
  symbol = "BTCUSDT",
  limit = 12,
}) => {
  const [orders, setOrders] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = () => {
      setLoading(true);
      fetchTradeHistory(symbol, limit).then((data: Trade[]) => {
        if (isMounted) setOrders(data);
        setLoading(false);
      });
    };
    load();
    const interval = setInterval(load, 4000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [symbol, limit]);

  return (
    <div className=" rounded-xl p-4 min-w-[220px]">
      <div className="font-bold mb-2">Lịch sử giao dịch</div>
      {loading ? (
        <div className="text-center text-gray-500 py-8">Đang tải...</div>
      ) : (
        <div>
          {orders.map((t, i) => {
            const side = t.isBuyerMaker ? "down" : "up";
            return (
              <div
                key={i}
                className="flex justify-between text-xs border-b border-[#25293c] py-1 last:border-b-0"
              >
                <span
                  className={
                    side === "up" ? "text-[#25a750]" : "text-[#ca3f64]"
                  }
                >
                  {parseFloat(t.price)}
                </span>
                <span className="text-gray-400">{parseFloat(t.qty)}</span>
                <span className="text-gray-400">
                  {new Date(t.time).toLocaleTimeString()}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HistoryOrderTable;
