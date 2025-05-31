// src/api/binance.ts

export async function fetchCandles(symbol: string, interval: string = "15m", limit: number = 50) {
  const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.map((c: any) => ({
    x: new Date(c[0]),
    y: [Number(c[1]), Number(c[2]), Number(c[3]), Number(c[4])],
    volume: Number(c[5]),
  }));
}


export async function fetchOrderBook(symbol: string, limit: number = 14) {
  const url = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    bids: data.bids,
    asks: data.asks
  };
}

export async function fetchTradeHistory(symbol: string, limit: number = 10) {
  const url = `https://api.binance.com/api/v3/trades?symbol=${symbol}&limit=${limit}`;
  const res = await fetch(url);
  return await res.json();
}
