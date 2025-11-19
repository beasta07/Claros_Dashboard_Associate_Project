import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../api/clients";
import type { Client } from "../types";
import KpiCard from "../components/KpiCard/KpiCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "../components/KpiCard/ChartCard";

const DashboardPage = () => {
  const { data: clients, isLoading, isError, error } = useQuery<Client[], Error>({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-500">Error: {error.message}</div>;

  // KPI calculations
  const totalClients = clients?.length ?? 0;
  const activeClients = clients?.filter(c => c.status === "Active").length ?? 0;
  const inactiveClients = clients?.filter(c => c.status === "Inactive").length ?? 0;

  // Chart data
  const statusData = [
    { name: "Active", value: activeClients },
    { name: "Inactive", value: inactiveClients },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total Clients" value={totalClients} />
        <KpiCard title="Active Clients" value={activeClients} color="bg-green-100" />
        <KpiCard title="Inactive Clients" value={inactiveClients} color="bg-red-100" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Client Status Overview">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={statusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Clients per Company">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={clients.map(c => ({ name: c.company, value: 1 }))}
              stackOffset="expand"
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#facc15" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default DashboardPage;
