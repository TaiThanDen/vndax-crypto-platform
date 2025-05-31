import React, { useEffect, useRef } from "react";

interface ChartTradingViewProps {
  symbol?: string; // ví dụ: BTCUSDT
  interval?: string; // ví dụ: "15"
  width?: number | string;
  height?: number | string;
}

const ChartTradingView: React.FC<ChartTradingViewProps> = ({
  symbol = "BTCUSDT",
  interval = "15",
  width = "100%",
  height = 400,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear container before render
    if (ref.current) {
      ref.current.innerHTML = `<div id="tv_chart_container" style="width:100%;height:100%"></div>`;
    }
    // Format symbol for TradingView
    const tvSymbol = `BINANCE:${symbol.toUpperCase()}`;

    // Add script only ONCE (or every re-render, but always remove old chart before mount new)
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/tv.js";
    script.onload = () => {
      // @ts-ignore
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          width: "100%",
          height: height,
          symbol: tvSymbol,
          interval: interval,
          timezone: "Asia/Ho_Chi_Minh",
          theme: "dark",
          style: "1",
          locale: "vi",
          toolbar_bg: "#181a20",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          container_id: "tv_chart_container",
        });
      }
    };
    if (ref.current) ref.current.appendChild(script);

    // Cleanup
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [symbol, interval, height]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        background: "#23263a",
        borderRadius: 12,
        padding: 0,
        overflow: "hidden",
      }}
      className="chart-tradingview w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
    />
  );
};

export default ChartTradingView;
