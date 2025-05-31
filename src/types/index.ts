export interface MarketData {
    symbol: string;
    price: number;
    volume: number;
    priceChange: number;
    priceChangePercent: number;
}

export interface Order {
    id: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    price: number;
    quantity: number;
    status: 'FILLED' | 'PENDING' | 'CANCELLED';
    createdAt: string;
}

export interface UserOrder {
    orderId: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    price: number;
    quantity: number;
    executedQty: number;
    status: 'FILLED' | 'PARTIALLY_FILLED' | 'CANCELLED';
    time: number;
}
// src/types/index.ts

export interface Trade {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}
