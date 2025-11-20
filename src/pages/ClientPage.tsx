import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../api/clients";
import type { Client } from "../types";
import { useState } from "react";
import { Link } from "react-router-dom";
import TableSkeleton from "../components/ui/Skeleton/TableSkeleton";

const ClientPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");
  const itemsPerPage = 10;

  const { data, isLoading, isError, error } = useQuery<Client[], Error>({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  const totalItems = data?.length ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedClients = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

if (isLoading)
  return (
    <div className="bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4">
      <TableSkeleton rows={10} columns={5} />
    </div>
  );  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  const filteredClients = paginatedClients?.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ? true : c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 lg:p-6 bg-white font-jakarta rounded-md">
      <h1 className="text-2xl font-jhaktra font-semibold mb-4">Clients</h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
        <input
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 bg-white rounded-lg w-full sm:max-w-sm"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="px-4 py-2 border border-gray-300 bg-white rounded-lg w-full sm:max-w-xs"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 min-w-[600px] sm:min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-xs sm:text-sm">Name</th>
              <th className="p-3 text-left text-xs sm:text-sm">Email</th>
              <th className="p-3 text-left text-xs sm:text-sm">Company</th>
              <th className="p-3 text-center text-xs sm:text-sm">Status</th>
              <th className="p-3 text-center text-xs sm:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients?.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="flex items-center gap-2 border-t border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">
                  <img
                    src={client.image ?? "https://via.placeholder.com/40"}
                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                    alt={client.name}
                  />
                  <div>
                    <h1 className="font-medium">{client.name}</h1>
                    <p className="text-gray-500 text-[10px] sm:text-xs">@{client.username}</p>
                  </div>
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">{client.email}</td>
                <td className="border border-gray-300 p-2 sm:p-4 text-xs sm:text-sm">{client.company}</td>
                <td className="border border-gray-300 p-2 sm:p-4 text-center text-xs sm:text-sm">
                  <div
                    className={`font-medium rounded-md px-2 py-1 ${
                      client.status === "Active"
                        ? "text-green-600 border border-green-500 bg-green-50"
                        : "text-red-600 border border-red-500 bg-red-50"
                    }`}
                  >
                    {client.status}
                  </div>
                </td>
                <td className="border border-gray-300 p-2 sm:p-4 text-center text-xs sm:text-sm">
                  <Link
                    to={`/clients/${client.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
    </div>
  );
};

export default ClientPage;
