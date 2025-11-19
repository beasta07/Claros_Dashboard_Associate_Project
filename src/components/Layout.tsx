import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section className="flex w-full">
      {/* Sticky sidebar */}
      <aside className="w-[20%] h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 min-h-screen overflow-auto">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
