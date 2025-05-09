import React from 'react';
import { Button } from "@/components/ui/button";
import { FaHandHoldingDollar,FaCoins  } from "react-icons/fa6";
import { FaUncharted,FaShoppingCart  } from "react-icons/fa";
import { } from "react-icons";
import { GrTransaction } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TrendingUp, TrendingDown, DollarSign, BarChart2, Layers } from 'lucide-react';

const markets = [
  { 
    name: 'Bitcoin', 
    symbol: 'BTC/USDT', 
    price: '$68,245.30', 
    change: 2.45, 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' 
  },
  { 
    name: 'Ethereum', 
    symbol: 'ETH/USDT', 
    price: '$3,780.15', 
    change: 1.87, 
    icon: 'https://www.iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.1024.png' 
  },
  { 
    name: 'USDC', 
    symbol: 'USDC/USDT', 
    price: '$1.002', 
    change: 0.02, 
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/usdc-fpxuadmgafrjjy85bgie5.png/usdc-kksfxcrdl3f9pjx0v6jxxp.png?_a=DATAdtAAZAA0' 
  },
  { 
    name: 'Binance Coin', 
    symbol: 'BNB/USDT', 
    price: '$598.75', 
    change: -0.85, 
    icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/bnb-2c9adc7qw85po528q8y3b.png/bnb-tss7lyzvhxyjfc9ivae0l.png?_a=DATAdtAAZAA0' 
  },
  { 
    name: 'Solana', 
    symbol: 'SOL/USDT', 
    price: '$142.30', 
    change: 3.24, 
    icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png' 
  }
];

const MarketStats = () => {
  return (
    <section className="bg-vndax-black py-16" id="market">
      <div className="container-custom">
        <h2 className="section-title text-center text-white mb-12">Số 1 về thanh khoản thị trường</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Stats */}
          <div className="flex flex-col space-y-8">
            <div className="bg-vndax-darkgray rounded-lg p-6 flex items-center gap-4">
              <FaHandHoldingDollar  className="text-vndax-green w-8 h-8" />
              <div>
                <div className="text-xl text-gray-400 mb-1">Tổng tài sản quản lý</div>
                <div className="text-3xl md:text-4xl font-bold text-white">$1.2 Tỷ USD</div>
              </div>
            </div>
            
            <div className="bg-vndax-darkgray rounded-lg p-6 flex items-center gap-4">
              <GrTransaction   className="text-vndax-green w-8 h-8" />
              <div>
                <div className="text-xl text-gray-400 mb-1">Tổng giao dịch 24h</div>
                <div className="text-3xl md:text-4xl font-bold text-white">$328M</div>
              </div>
            </div>
            
            <div className="bg-vndax-darkgray rounded-lg p-6 flex items-center gap-4">
              <FaCoins   className="text-vndax-green w-8 h-8" />
              <div>
                <div className="text-xl text-gray-400 mb-1">Số lượng coin/token</div>
                <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Market Table */}
          <div className="bg-vndax-darkgray rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-vndax-lightgray">
              <div className="text-xl font-medium text-white">Cặp giao dịch nổi bật</div>
              <Button 
                variant="ghost" 
                className="text-vndax-green hover:text-white hover:bg-vndax-lightgray"
              >
                Xem tất cả
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="text-gray-400 text-sm">
                  <tr className="border-b border-vndax-lightgray">
                    <th className="py-3 px-4 text-left">Tài sản</th>
                    <th className="py-3 px-4 text-right">Giá</th>
                    <th className="py-3 px-4 text-right">Biến động 24h</th>
                    <th className="py-3 px-4 text-right">Giao dịch</th>
                  </tr>
                </thead>
                <tbody>
                  {markets.map((market, index) => (
                    <tr key={index} className="border-b border-vndax-lightgray/50 hover:bg-vndax-lightgray/30 transition">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <img src={market.icon} alt={market.name} className="w-6 h-6" />
                          <span className="font-medium text-white">{market.name}</span>
                          <span className="text-gray-400 text-xs">{market.symbol}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right text-white">{market.price}</td>
                      <td className={`py-3 px-4 text-right ${market.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <div className="flex items-center justify-end gap-1">
                          {market.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          {market.change >= 0 ? '+' : ''}{market.change}%
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="sm" className="h-7 text-xs bg-green-500/10 text-green-500 hover:text-white hover:bg-green-500/80">Mua</Button>
                          <Button variant="ghost" size="sm" className="h-7 text-xs bg-red-500/10 text-red-500 hover:text-white hover:bg-red-500/80">Bán</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
