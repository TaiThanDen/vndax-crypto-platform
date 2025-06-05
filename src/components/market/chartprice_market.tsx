import React from "react";
import MiniCoinChart from "../MiniCoinChart";
import coinData from "../data/coindata";

export default function CoinList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        background: "#181A20",
        minHeight: "100vh",
        padding: 40,
      }}
    >
      {coinData.map((coin) => (
        <MiniCoinChart
          key={coin.symbol}
          data={coin.chart}
        />
      ))}
    </div>
  );
}
