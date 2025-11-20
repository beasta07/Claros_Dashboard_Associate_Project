import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type{LayoutStateProps} from "../types/index"
const Layout = () => {
  const [displaySidebar, setDisplaySidebar] = useState<LayoutStateProps["displaySidebar"]>(false);
  return (
    <section className="flex w-full">
      {/* Sticky sidebar */}
      <aside className="md:w-[20%] h-screen md:sticky md:top-0">
        <Sidebar displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar}  />
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-[#F7F7FB]  overflow-auto">
        <Navbar displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar} />
        <div className="md:p-6">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
