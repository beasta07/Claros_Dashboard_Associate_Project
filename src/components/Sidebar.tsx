import { Login, Setting, User } from "react-iconly";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import type { LayoutStateProps } from "../types";

const Sidebar = ({ displaySidebar, setDisplaySidebar }:LayoutStateProps) => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: <img src="/public/images/Sidebar/element-4.png" alt="dashboard" />,
      path: "/",
    },

    {
      label: "Clients",
      icon: <User primaryColor="gray" secondaryColor="gray" size="medium" />,
      path: "/clients",
    },

    {
      label: "Transaction",
      icon: <Setting primaryColor="gray" secondaryColor="gray" size="medium" />,
      path: "/transaction",
    },
  ];

  return (
    <div
      className={`${
        displaySidebar ? "block relative" : "hidden md:block"
      } relative h-screen font-jakarta  lg:w-auto w-screen bg-white  flex flex-col`}
    >
      <div className="flex items-center  lg:p-4 p-4 justify-between">
        <NavLink onClick={() => setDisplaySidebar(!displaySidebar)} to="/">
          <div className="lg:w-full text-lg border-b-gray-300 text-nowrap text-[#09426A] font-bold  lg:rounded-none rounded-full p-4">
            Claros Analytics
          </div>
        </NavLink>

        <GiHamburgerMenu
          className="text-2xl lg:hidden"
          onClick={() => setDisplaySidebar(!displaySidebar)}
        />
      </div>
      <hr className="text-gray-300" />

      <ul className="flex flex-col mt-10 lg:p-4 p-4 gap-6 text-sm  lg:px-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setDisplaySidebar(!displaySidebar)}
            className={({ isActive }) =>
              `flex items-center gap-3  ${
                isActive ? "font-semibold text-black" : "text-gray-700"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="h-6 bg-blue-900 w-0.5 absolute left-1" />
                )}
                {item.icon}
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </ul>

      <ul className="absolute bottom-7 flex flex-col gap-6 text-sm px-4">
        <NavLink to="/login" className="flex gap-3">
          <Login primaryColor="gray" secondaryColor="gray" size="medium" />
          <span className="text-gray-700">Logout</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
