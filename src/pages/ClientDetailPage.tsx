import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchClientById } from "../api/clients";
import type { ClientDetail } from "../types/index";
import ClientHero from "../components/ForClientDetail/ClientHero";
import ContactSection from "../components/ForClientDetail/ContactSection";
import CompanySection from "../components/ForClientDetail/CompanySection";
import AdditionalInfoSection from "../components/ForClientDetail/AdditionalInfo";
import ClientDetailSkeleton from "../components/ui/Skeleton/ClientDetailSkeleton";

const ClientDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery<ClientDetail, Error>({
    queryKey: ["client", id],
    queryFn: () => fetchClientById(id!),
    enabled: !!id, 
  });

  if (isLoading) return <ClientDetailSkeleton/>;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  const client = data!;

  return (
    <main className="min-h-screen font-jakarta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link to="/" className="text-gray-600 transition-colors">
            Dashboard
          </Link>
          <span className="text-gray-600">/</span>
          <Link to="/clients" className="text-gray-600 transition-colors">
            Clients
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-black font-medium">{client.name}</span>
        </nav>

        <ClientHero client={client} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <ContactSection client={client} />
            <CompanySection client={client} />
          </div>

          <div className="space-y-6">
            <AdditionalInfoSection client={client} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientDetailPage;
