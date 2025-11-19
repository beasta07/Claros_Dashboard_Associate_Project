import type { Client } from "../types/index";

// Fetch all clients
export const fetchClients = async (): Promise<Client[]> => {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw new Error("Failed to fetch clients");

  const { users } = await res.json();

  return users.map((u: any) => ({
    id: u.id.toString(),
    name: `${u.firstName} ${u.lastName}`,
    image: `${u.image}`,
    username: `${u.username}`,
    email: u.email,
    company: u.company?.name || "N/A",
    status: Math.random() > 0.5 ? "Active" : "Inactive",
  }));
};

// Fetch single client by ID
export const fetchClientById = async (id: string): Promise<Client> => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw new Error("Client not found");

  const u = await res.json();
  return {
    id: u.id.toString(),
    name: `${u.firstName} ${u.lastName}`,
    email: u.email,
    company: u.company?.name || "N/A",
    status: Math.random() > 0.5 ? "Active" : "Inactive",
  };
};
