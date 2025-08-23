import { Card } from "@/components/ui/card";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
  market_cap_rank: number;
}

interface CryptoCardProps {
  crypto: CryptoData;
}

export const CryptoCard = ({ crypto }: CryptoCardProps) => {
  const isPositive = crypto.price_change_percentage_24h > 0;
  
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:crypto-glow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={crypto.image} 
            alt={crypto.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-foreground">{crypto.name}</h3>
            <p className="text-muted-foreground text-sm uppercase">{crypto.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-foreground">
            ${crypto.current_price.toLocaleString('en-NZ', { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2 
            })} NZD
          </div>
          <div className={`text-sm font-medium ${isPositive ? 'price-up' : 'price-down'}`}>
            {isPositive ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        Rank #{crypto.market_cap_rank}
      </div>
    </Card>
  );
};