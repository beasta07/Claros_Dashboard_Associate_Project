import type { Client,ClientDetail } from "../types/index";

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
export const fetchClientById = async (id: string): Promise<ClientDetail> => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw new Error("Client not found");

  const u = await res.json();

  return {
    id: u.id.toString(),
    image: u.image,
    name: `${u.firstName} ${u.lastName}`,
    username: u.username,
    occupation: u.company?.title ?? "N/A",
    status: Math.random() > 0.5 ? "Active" : "Inactive",
    company: u.company?.name ?? "N/A",
    email: u.email,
    phone: u.phone,
    age: u.age.toString(),
    gender: u.gender,
    bloodGroup: u.bloodGroup,
    university: u.university,
    role: u.company?.department ?? "N/A",
   
  };
};

