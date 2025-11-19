// src/api/transactions.ts
export interface Transaction {
  name: string;
  date: string;
  amount: number;
  discount: number;
  discountTotal: number
  status: string;
  statusColor: string;
  logo: string;
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
  const res = await fetch('https://dummyjson.com/carts?limit=4');
  if (!res.ok) throw new Error('Failed to fetch transactions');
  const data = await res.json();

  const allTransactions: Transaction[] = data.carts.flatMap((cart: any) =>
    cart.products.map((product: any) => ({
      name: product.title,
      date: new Date().toLocaleDateString(),
      amount: Number(product.total),
      discount: Number(product.discountPercentage),
      discountTotal: Number(product.discountedTotal),
      logo: product.thumbnail,
    }))
  );

  // Return only the latest 5
  return allTransactions
};
