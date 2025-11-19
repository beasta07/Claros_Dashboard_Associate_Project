import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../api/clients";
import type { Client } from "../types";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClientPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
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

  // Local state for search
  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  // Filter data
  const filteredClients = paginatedClients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Clients</h1>

      <input
        type="text"
        placeholder="Search clients..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4 w-full max-w-sm"
      />

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td className="border p-2">{client.name}</td>
              <td className="border p-2">{client.email}</td>
              <td className="border p-2">{client.company}</td>
              <td className="border p-2">{client.status}</td>
              <td className="border p-2">
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
      <div className="flex justify-center items-center gap-4 mt-4">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(prev => prev - 1)}
    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
  >
    Prev
  </button>

  <span className="text-sm">
    Page {currentPage} of {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(prev => prev + 1)}
    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default ClientPage;
