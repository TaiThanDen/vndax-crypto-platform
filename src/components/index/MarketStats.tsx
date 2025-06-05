import React from 'react';
import { Button } from "@/components/ui/button.tsx";
import { FaHandHoldingDollar, FaCoins } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext.tsx";

const markets = [
  { name: 'Bitcoin', symbol: 'BTC/USDT', price: '$68,245.30', change: 2.45, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png' },
  { name: 'Ethereum', symbol: 'ETH/USDT', price: '$3,780.15', change: 1.87, icon: 'https://www.iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.1024.png' },
  { name: 'USDC', symbol: 'USDC/USDT', price: '$1.002', change: 0.02, icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/usdc-fpxuadmgafrjjy85bgie5.png/usdc-kksfxcrdl3f9pjx0v6jxxp.png?_a=DATAdtAAZAA0' },
  { name: 'Binance Coin', symbol: 'BNB/USDT', price: '$598.75', change: -0.85, icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/bnb-2c9adc7qw85po528q8y3b.png/bnb-tss7lyzvhxyjfc9ivae0l.png?_a=DATAdtAAZAA0' },
  { name: 'Solana', symbol: 'SOL/USDT', price: '$142.30', change: 3.24, icon: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png' }
];

const MarketStats = () => {
  const { t } = useLanguage();
  return (
      <section className="bg-[hsl(var(--background))] py-16" id="market">
        <div className="container-custom">
          <h2 className="section-title text-center text-[hsl(var(--foreground))] mb-12">{t('market')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 " data-aos="fade-up">
            {/* Left Column - Stats */}
            <div className="flex flex-col space-y-8  " data-aos="fade-up">
              <div className="bg-[hsl(var(--background))] shadow-md hover:hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-colors transition-shadow duration-300 rounded-lg p-6 flex items-center gap-4">
                <FaHandHoldingDollar className="text-[hsl(var(--primary))] w-8 h-8" />
                <div>
                  <div className="text-xl text-[hsl(var(--muted-foreground))] mb-1">{t('assetTitle')}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">{t('assetTitle')}</div>
                </div>
              </div>

              <div className="bg-[hsl(var(--background))] shadow-md hover:hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-colors transition-shadow duration-300 rounded-lg p-6 flex items-center gap-4">
                <GrTransaction className="text-[hsl(var(--primary))] w-8 h-8" />
                <div>
                  <div className="text-xl text-[hsl(var(--muted-foreground))] mb-1">{t('totalTradesTitle')}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">$328M</div>
                </div>
              </div>

              <div className="bg-[hsl(var(--background))] shadow-md hover:hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-colors transition-shadow duration-300 rounded-lg p-6 flex items-center gap-4">
                <FaCoins className="text-[hsl(var(--primary))] w-8 h-8" />
                <div>
                  <div className="text-xl text-[hsl(var(--muted-foreground))] mb-1">{t('coinTitle')}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))]">150+</div>
                </div>
              </div>
            </div>

            {/* Right Column - Market Table */}
            <div className="bg-[hsl(var(--background))] shadow-md hover:hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-colors transition-shadow duration-300 rounded-lg overflow-hidden" data-aos="fade-up">
              <div className="flex justify-between items-center p-4 border-b border-[hsl(var(--muted-foreground))]/40">
                <div className="text-xl font-medium text-[hsl(var(--foreground))]">{t('topTradesTitle')}</div>
                <Button
                    variant="ghost"
                    className="text-[hsl(var(--primary))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-foreground))]/10"
                >
                  {t('topTradesSeeAll')}
                </Button>
              </div>

              <div className="overflow">
                <table className="w-full">
                  <thead className="text-[hsl(var(--muted-foreground))] text-sm">
                  <tr className="border-b border-[hsl(var(--muted-foreground))]/30">
                    <th className="py-3 px-4 text-left">{t('tradeTableAsset')}</th>
                    <th className="py-3 px-4 text-right">{t('tradeTablePrice')}</th>
                    <th className="py-3 px-4 text-right">{t('tradeTableShift')}</th>
                    <th className="py-3 px-4 hidden sm:flex text-right">{t('tradeTableTrade')}</th>
                  </tr>
                  </thead>
                  <tbody>
                  {markets.map((market, index) => (
                      <tr
                          key={index}
                          className="border-b border-[hsl(var(--muted-foreground))]/20 hover:bg-[hsl(var(--muted-foreground))]/10 transition"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <img src={market.icon} alt={market.name} className="w-6 h-6" />
                            <span className="font-medium text-[hsl(var(--foreground))]">{market.name}</span>
                            <span className="text-[hsl(var(--muted-foreground))] text-xs">{market.symbol}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right text-[hsl(var(--foreground))]">{market.price}</td>
                        <td className={`py-3 px-4 text-right ${market.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          <div className="flex items-center justify-end gap-1">
                            {market.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                            {market.change >= 0 ? '+' : ''}
                            {market.change}%
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="hidden sm:flex justify-end gap-1">
                            <Button variant="ghost" size="sm" className="h-7 text-xs bg-green-500/10 text-green-500 hover:text-white hover:bg-green-500/80">{t('tradeTableBuy')}</Button>
                            <Button variant="ghost" size="sm" className="h-7 text-xs bg-red-500/10 text-red-500 hover:text-white hover:bg-red-500/80">{t('tradeTableSell')}</Button>
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
