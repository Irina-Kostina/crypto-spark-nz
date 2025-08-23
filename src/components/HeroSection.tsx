import { TrendingUp, TrendingDown } from "lucide-react";

interface TopCrypto {
  name: string;
  symbol: string;
  price: number;
  change: number;
  image: string;
}

interface HeroSectionProps {
  topCryptos: TopCrypto[];
}

export const HeroSection = ({ topCryptos }: HeroSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="crypto-gradient">CryptoSpark</span>
          <br />
          <span className="text-foreground">NZ Trading</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Track and trade the world's most popular cryptocurrencies with real-time NZD prices
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {topCryptos.slice(0, 3).map((crypto) => (
            <div key={crypto.symbol} className="bg-card border border-border rounded-xl p-6 hover:crypto-glow transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={crypto.image} alt={crypto.name} className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{crypto.name}</h3>
                  <p className="text-muted-foreground">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                ${crypto.price.toLocaleString('en-NZ', { minimumFractionDigits: 2 })} NZD
              </div>
              <div className={`flex items-center justify-center gap-1 ${crypto.change > 0 ? 'price-up' : 'price-down'}`}>
                {crypto.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="font-medium">
                  {crypto.change > 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};