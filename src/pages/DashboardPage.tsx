import AnalyticChart from "../components/Dashboard/AnalyticChart";
import Overview from "../components/Dashboard/Overview";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import Clients from "../components/Dashboard/Clients";

const Dashboard = () => {
  return (
    <main className="pb-8 w-full lg:px-10 px-4">
      <div className="lg:flex items-start gap-5 w-full">
        <section className="lg:w-[70%] space-y-5" aria-label="Dashboard main content">
          <Overview />
          <AnalyticChart />
        </section>

        <aside className="lg:w-[30%] h-full space-y-5" aria-label="Dashboard sidebar">
          <Clients />
          <RecentTransactions />
        </aside>
      </div>
    </main>
  );
};

export default Dashboard;
