import React from "react";
import ReactApexChart from "react-apexcharts";

type MiniCoinChartProps = {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
};

const MiniCoinChart: React.FC<MiniCoinChartProps> = ({
  data,
  width = 172,
  height = 70,
  color = "#22c55e",
}) => {
  // Xác định màu dựa theo xu hướng giá
  // const color = data[data.length - 1] >= data[0] ? "#00e396" : "#ff4560";

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
        width,
        height,
        borderRadius: 10,
        color: "#fff",
        padding: 0,
        margin: 0,
        overflow: "hidden",
      }}
    >
      {/* {coinName && ( */}
      <div
        style={{
          marginBottom: 8,
          fontWeight: "bold",
          color: "#f1c40f",
        }}
      >
        {/* {coinName} */}
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={height}
        width={width}
      />
    </div>
  );
};

export default MiniCoinChart;
