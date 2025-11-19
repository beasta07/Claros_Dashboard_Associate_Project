import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User as UserIcon,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-[#00416A] text-white flex flex-col justify-between transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"} p-4`}
    >
      <div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 p-2 rounded hover:bg-[#013554] transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {!collapsed && (
          <h1 className="text-xl font-bold mb-8">Claros Dashboard</h1>
        )}

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-[#013554] transition ${
                isActive ? "bg-[#013554] font-semibold" : "text-blue-200"
              }`
            }
          >
            <LayoutDashboard size={20} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-[#013554] transition ${
                isActive ? "bg-[#013554] font-semibold" : "text-blue-200"
              }`
            }
          >
            <Users size={20} />
            {!collapsed && <span>Clients</span>}
          </NavLink>
        </nav>
      </div>

      {/* Bottom User Section */}
      <div className="border-t border-blue-700 pt-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-600 p-2 rounded-full">
            <UserIcon size={20} />
          </div>
          {!collapsed && (
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-blue-200">Admin</p>
            </div>
          )}
        </div>

        <button className="flex items-center gap-3 text-red-300 hover:text-red-400 transition">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
