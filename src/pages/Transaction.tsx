import { useQuery } from "@tanstack/react-query";
import { fetchTransactions, type Transaction } from "../api/transactions";
import { useState } from "react";
import TableSkeleton from "../components/ui/Skeleton/TableSkeleton";

const TransactionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading, isError, error } = useQuery<Transaction[], Error>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });

if (isLoading)
  return (
    <div className="bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4">
      <TableSkeleton rows={10} columns={5} />
    </div>
  );  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const totalItems = data?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="p-4 lg:p-6 bg-white font-jakarta rounded-md">
      <h1 className="text-2xl font-jhaktra font-semibold mb-4">Transactions</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-xs sm:text-sm">Name</th>
              <th className="p-3 text-left text-xs sm:text-sm">Amount</th>
              <th className="p-3 text-left text-xs sm:text-sm">Discount Rate</th>
              <th className="p-3 text-left text-xs sm:text-sm">Final Total</th>
              <th className="p-3 text-left text-xs sm:text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="flex items-center gap-2 border-t border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  <img
                    src={product.logo ?? "https://via.placeholder.com/40"}
                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                    alt={product.name}
                  />
                  <div>
                    <h1 className="font-medium">{product.name}</h1>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  Rs {(product.amount ?? 0).toFixed(2)}
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  {product.discount} %
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  {product.discountTotal ?? "-"}
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  {product.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TransactionPage;
