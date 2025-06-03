import React, { useEffect, useState } from "react";

interface CoinOverviewProps {
  coinId: string;
}

const CoinInfo: React.FC<CoinOverviewProps> = ({ coinId }) => {
  const [coin, setCoin] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [coinId]);

  if (loading) return <div className="text-gray-400">Đang tải dữ liệu...</div>;
  if (!coin) return <div className="text-red-500">Không thể tải dữ liệu.</div>;

  const market = coin.market_data;

  // Ưu tiên mô tả tiếng Việt
  const fullDescription =
    coin.description?.vi?.trim() ||
    coin.description?.en?.trim() ||
    "Không có mô tả.";

  const shortDescription = fullDescription.substring(0, 200);
  const shouldShowToggle = fullDescription.length > 200;

  return (
    <div className="bg-[#000] text-white p-6 rounded-xl border border-[#23262F] w-full h-full space-y-4">
      {/* Tên và mô tả */}
      <div className="flex items-center gap-3">
        <img src={coin.image?.small} alt={coin.name} className="w-6 h-6" />
        <span className="text-lg font-semibold">
          {coin.symbol?.toUpperCase()} {coin.name}
        </span>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">
        {expanded ? fullDescription : shortDescription}
        {shouldShowToggle && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-2 text-[#4ade80] hover:underline text-xs"
          >
            {expanded ? "Thu gọn" : "Xem thêm"}
          </button>
        )}
      </p>

      {/* Bảng dữ liệu */}
      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300">
        <div>Xếp hạng chỉ số số lượng</div>
        <div className="text-white">Số {coin.market_cap_rank}</div>

        <div>Xếp hạng vốn hóa thị trường</div>
        <div className="text-white">Số {coin.market_cap_rank}</div>

        <div>Vốn hóa thị trường</div>
        <div className="text-white">
          ${market.market_cap.usd.toLocaleString()}
        </div>

        <div>Số coin lưu hành</div>
        <div className="text-white">
          {market.circulating_supply?.toLocaleString()}{" "}
          {coin.symbol?.toUpperCase()}
        </div>

        <div>Tỷ lệ ưa thích</div>
        <div className="text-white">99,99%</div>

        <div>Cao nhất lịch sử</div>
        <div className="text-white">
          ${market.ath?.usd?.toLocaleString()} (
          {market.ath_date?.usd?.slice(0, 10)})
        </div>

        <div>Thấp nhất lịch sử</div>
        <div className="text-white">
          ${market.atl?.usd?.toLocaleString()} (
          {market.atl_date?.usd?.slice(0, 10)})
        </div>

        <div>Ngày TGE</div>
        <div className="text-white">{coin.genesis_date || "Không rõ"}</div>

        <div>Blockchain</div>
        <div className="text-white">{coin.symbol?.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default CoinInfo;
