// src/api/coins.ts
export interface Coin {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const fetchCoins = async (): Promise<Coin[]> => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  if (!res.ok) throw new Error("Failed to fetch coins");
  return res.json();
};

