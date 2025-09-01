# 💹 CryptoSpark NZ

CryptoSpark NZ is a responsive web application for tracking the world’s most popular cryptocurrencies in real time, with all prices displayed in **New Zealand Dollars (NZD)**.  

The app is built with **React, TypeScript, TailwindCSS, and shadcn/ui**, and features a clean, modern interface. It highlights the top three cryptocurrencies (Bitcoin, Ethereum, and Tether) in visually appealing cards with a custom **Electric Border animation** for a futuristic trading look.  

> ⚡ Repo originally scaffolded with **[Lovable.dev](https://lovable.dev/)**, then customized and extended with unique features, styling, and animations.  
> ✨ Styling and animation design were enhanced with **AI-assisted support**.

---

## ✨ Features

- 📊 Real-time NZD prices for Bitcoin, Ethereum, and Tether  
- 🔌 Live data fetched from the **[CoinGecko API](https://www.coingecko.com/)**  
- 🔥 Animated glowing borders around crypto cards via a custom `ElectricBorder` component  
- 📱 Fully responsive design for desktop, tablet, and mobile  
- 🎨 Modern styling with **TailwindCSS** and **shadcn/ui**  
- ⚡ Fast and lightweight thanks to **Vite + React**  

---

## 🔌 Data Source

CryptoSpark NZ does not include its own backend server.  
Instead, it fetches live cryptocurrency market data directly from the **CoinGecko API** using a custom React hook (`useCryptoData.ts`).  

This approach keeps the app lightweight while still providing real-time NZD price updates.  
Future improvements could include adding a Node.js/Express backend and database for features like user accounts, saved watchlists, and historical data.

---

## 🎨 Animation Inspiration

The **Electric Border effect** was inspired by and adapted from a demo on **[ReactBits.dev](https://reactbits.dev/animations/electric-border)** — a site showcasing interactive React animation tutorials and code samples.  

The implementation was then extended and customized for this project to give the crypto cards their glowing, animated frames.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- **Icons:** [Lucide React](https://lucide.dev/)  
- **Build Tool:** [Vite](https://vitejs.dev/)  
- **Data Source:** [CoinGecko API](https://www.coingecko.com/)  
- **Animations:** Custom SVG filter (`ElectricBorder` component) + CSS  

---

## 📂 Project Structure

```plaintext
src/
├─ components/
│  ├─ HeroSection.tsx      # Displays hero + top 3 cryptos
│  ├─ ElectricBorder.tsx   # Animated glowing border component
│  ├─ ElectricBorder.css   # Styling for ElectricBorder
│  └─ ui/                  # shadcn/ui components
├─ hooks/
│  └─ useCryptoData.ts     # Custom hook to fetch CoinGecko API data
├─ pages/                  # Page-level components (if any)
├─ App.tsx                 # Root component
├─ main.tsx                # Entry point
└─ index.css               # Global styles
