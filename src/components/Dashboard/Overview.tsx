import { IoWallet } from "react-icons/io5";
import { GiExpense } from "react-icons/gi";
import { IoBookmarks } from "react-icons/io5";
import { SiMoneygram } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../../api/overview";
import type { Coin } from "../../api/overview";

const Overview = () => {

  const {
    data: coins,
    isLoading,
    isError,
    error,
  } = useQuery<Coin[], Error>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-500">{error.message}</div>;

  // --- Transform crypto values into analytics KPIs ---
  const totalAnnualSpend =
    coins?.reduce((sum, item) => sum + item.market_cap, 0) ?? 0;

  const highestCostIncrease = coins?.reduce(
    (prev, item) =>
      item.price_change_percentage_24h >
      (prev.price_change_percentage_24h ?? -Infinity)
        ? item
        : prev,
    {} as Coin
  );

  const largestCostDrop = coins?.reduce(
    (prev, item) =>
      item.price_change_percentage_24h <
      (prev.price_change_percentage_24h ?? Infinity)
        ? item
        : prev,
    {} as Coin
  );

  const totalEntities = coins?.length ?? 0;

  const cards = [
    {
      title: "Total Annual Spend",
      icon: <IoWallet className="text-[#DBDAEC] text-xl" />,
      amount: `$${totalAnnualSpend.toLocaleString()}`,
      percentage: "All departments combined",
    },
    {
      title: "Highest Cost Increase",
      icon: <IoBookmarks className="text-green-400 text-xl" />,
      amount: highestCostIncrease
        ? `${highestCostIncrease.name} +${highestCostIncrease.price_change_percentage_24h.toFixed(
            2
          )}%`
        : "-",
      percentage: "Daily cost spike",
    },
    {
      title: "Largest Cost Drop",
      icon: <GiExpense className="text-red-400 text-2xl" />,
      amount: largestCostDrop
        ? `${largestCostDrop.name} ${largestCostDrop.price_change_percentage_24h.toFixed(
            2
          )}%`
        : "-",
      percentage: "Daily cost reduction",
    },
    {
      title: "Entities Tracked",
      icon: <SiMoneygram className="text-blue-400 text-xl" />,
      amount: totalEntities,
      percentage: "Departments / plans",
    },
  ];

  return (
    <div className="bg-white font-jakarta rounded-lg p-3">
      <h1 className="font-bold">Overview</h1>
      <div className="grid lg:grid-cols-2 gap-5 my-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="border border-gray-300 p-3 hover:bg-[#4644A4] hover:text-white duration-1000 rounded-xl cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full border p-2 border-gray-300">
                {card.icon}
              </div>
              <div>
                <h2 className="font-semibold">{card.title}</h2>
                <p className="text-gray-400 text-xs">{card.percentage}</p>
              </div>
            </div>
            <div className="mt-4 text-2xl font-semibold">{card.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
