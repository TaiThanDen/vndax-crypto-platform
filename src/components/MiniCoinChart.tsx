import React from "react";
import ReactApexChart from "react-apexcharts";

interface MiniCoinChartProps {
  data: number[];
  coinName?: string;
  height?: number;
  width?: number | string;
}

const MiniCoinChart: React.FC<MiniCoinChartProps> = ({
  data,
  coinName,
  height = 90,
  width = "100%",
}) => {
  // Xác định màu dựa theo xu hướng giá
  const color = data[data.length - 1] >= data[0] ? "#00e396" : "#ff4560";

  const series = [{ data }];

  const options = {
    chart: {
      type: "line" as const,
      sparkline: { enabled: true },
      toolbar: { show: false },
      background: "transparent",
    },
    stroke: { width: 2.5, curve: "smooth" as const }, // cũng nên ép kiểu cho curve
    colors: [color],
    tooltip: {
      enabled: true,
      theme: "dark",
      x: { show: false }, // Ẩn số thứ tự trục X
      y: {
        formatter: (value: number) => value.toLocaleString(), // Chỉ hiện giá
        title: { formatter: () => "" },
      },
    },
  };

  return (
    <div
      style={{
        width: "200px",
        borderRadius: 10,
        padding: 14,
        margin: 4,
        color: "#fff",
      }}
    >
      {coinName && (
        <div
          style={{
            marginBottom: 8,
            fontWeight: "bold",
            color: "#f1c40f",
          }}
        >
          {coinName}
        </div>
      )}
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={height}
        width="100%"
      />
    </div>
  );
};

export default MiniCoinChart;
