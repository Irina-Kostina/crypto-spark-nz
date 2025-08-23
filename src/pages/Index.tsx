import { useState, useMemo } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { CryptoCard } from '@/components/CryptoCard';
import { SearchBar } from '@/components/SearchBar';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useCryptoData } from '@/hooks/useCryptoData';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { cryptos, loading, error, refetch } = useCryptoData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCryptos = useMemo(() => {
    if (!searchTerm) return cryptos;
    
    return cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cryptos, searchTerm]);

  const topCryptos = useMemo(() => {
    return cryptos.slice(0, 10).map(crypto => ({
      name: crypto.name,
      symbol: crypto.symbol,
      price: crypto.current_price,
      change: crypto.price_change_percentage_24h,
      image: crypto.image
    }));
  }, [cryptos]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Failed to load data</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={refetch} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold crypto-gradient">CryptoSpark NZ</h1>
          <div className="flex items-center gap-4">
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm}
              placeholder="Search cryptocurrencies..."
            />
            <Button
              onClick={refetch}
              variant="outline"
              size="sm"
              disabled={loading}
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!loading && topCryptos.length > 0 && (
        <HeroSection topCryptos={topCryptos} />
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {searchTerm ? 'Search Results' : 'Popular Cryptocurrencies'}
            </h2>
            <p className="text-muted-foreground">
              {searchTerm 
                ? `${filteredCryptos.length} result${filteredCryptos.length !== 1 ? 's' : ''} found`
                : 'Top cryptocurrencies by market cap in NZD'
              }
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            Updated every 30 seconds
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCryptos.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </div>
        )}

        {!loading && filteredCryptos.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try searching for a different cryptocurrency name or symbol
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Data provided by CoinGecko API • Prices in New Zealand Dollars (NZD)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;