import { useQuery } from "@tanstack/react-query";
import { fetchTransactions, type Transaction } from "../../api/transactions";
import { NavLink } from "react-router-dom";
import ListSkeleton from "../ui/Skeleton/ListSkeleton";

const RecentTransactions = () => {
  const {
    data: transactions,
    isLoading,
    isError,
  } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

if (isLoading) return <ListSkeleton count={4} />;  if (isError)
    return <p className="text-red-500">Failed to load transactions.</p>;

  return (
    <div className="bg-white mt-5 h-full w-full font-jakarta rounded-lg p-4">
      <div className="flex justify-between">
        <h1 className="font-bold">Recent Transactions</h1>
        <NavLink to='/transaction'>
        <button className="text-[#4644a4] cursor-pointer">See All</button>
        </NavLink>
      </div>
      <hr className="text-gray-300 my-5" />
      <ul className="space-y-4">
        {transactions?.slice(-4)?.map((tx: Transaction, index: number) => (
          <li key={index} className="flex text-sm justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="rounded-full">
                <img src={tx.logo} alt={tx.name} className="w-10 h-10" />
              </div>
              <div>
                <h1 className="font-semibold line-clamp-1 ">{tx.name}</h1>
              </div>
            </div>
            <div className="text-right">
              <h1 className="font-semibold text-nowrap">Rs {tx.amount.toFixed(0)}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
