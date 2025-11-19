import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchClientById } from "../api/clients";
import type { Client } from "../types/index";

const ClientDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery<Client, Error>({
    queryKey: ["client", id],
    queryFn: () => fetchClientById(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading client...</div>;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Client Details</h1>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
      <p><strong>Company:</strong> {data?.company}</p>
      <p><strong>Status:</strong> {data?.status}</p>
    </div>
  );
};

export default ClientDetailPage;
