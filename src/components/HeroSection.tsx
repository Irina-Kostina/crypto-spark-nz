import { TrendingUp, TrendingDown } from "lucide-react"
import ElectricBorder from "./ElectricBorder" // same folder import

interface TopCrypto {
  name: string
  symbol: string
  price: number
  change: number
  image: string
}

interface HeroSectionProps {
  topCryptos: TopCrypto[]
}

export const HeroSection = ({ topCryptos }: HeroSectionProps) => {
  const colorFor = (symbol: string) => {
    const s = symbol.toLowerCase()
    if (s === "btc" || s === "xbt") return "#F7931A" // Bitcoin orange
    if (s === "eth") return "#627EEA"                // Ethereum blue/purple
    if (s === "usdt" || s === "tether") return "#26A17B" // Tether green
    return "#7df9ff" // fallback neon
  }

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
            <ElectricBorder
              key={crypto.symbol}
              color={colorFor(crypto.symbol)}
              speed={1.2}
              chaos={0.7}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="rounded-xl"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img src={crypto.image} alt={crypto.name} className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{crypto.name}</h3>
                    <p className="text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
                  </div>
                </div>

                <div className="text-2xl font-bold text-foreground mb-2">
                  ${crypto.price.toLocaleString("en-NZ", { minimumFractionDigits: 2 })} NZD
                </div>

                <div className={`flex items-center justify-center gap-1 ${crypto.change > 0 ? "price-up" : "price-down"}`}>
                  {crypto.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="font-medium">
                    {crypto.change > 0 ? "+" : ""}
                    {crypto.change.toFixed(2)}%
                  </span>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
