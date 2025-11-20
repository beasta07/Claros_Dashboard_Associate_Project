import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import type { LayoutStateProps } from "../types";

const Navbar = ({ displaySidebar, setDisplaySidebar }: LayoutStateProps) => {
  const [displayDropdown, setDisplayDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown div
  const navigate = useNavigate();
  const params = useParams();
  const pageTitle = params.title || "Dashboard";

  const handleLogout = () => {
    navigate("/login");
  };

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDisplayDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#F7F7FB] w-full lg:px-10 lg:py-8 p-4 font-jakarta">
      <div className="lg:flex gap-4 w-full ">
        <div className="flex justify-between  gap-4 w-full">
          <div
            onClick={() => setDisplaySidebar(!displaySidebar)}
            className="border  lg:hidden flex items-center bg-white border-gray-300 rounded-full py-2 px-4"
          >
            <GiHamburgerMenu />
          </div>
          <div className="w-full">
            <NavLink to="/">
              <h1 className="w-full p-4 font-semibold block bg-white rounded-full">
                {pageTitle}
              </h1>
            </NavLink>
          </div>
        </div>

        <div className="bg-white rounded-full p-2 shadow-xs mt-4 lg:mt-0 flex gap-3 items-center">
          <div className="bg-[#4644A4] rounded-full px-2 py-2">
          </div>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setDisplayDropDown(!displayDropdown)}
              className="flex items-center w-full gap-2 cursor-pointer"
            >
              <h2 className="text-nowrap font-semibold text-sm">Pranish bista</h2>
              <IoIosArrowDown className="text-xl" />
            </div>

            {displayDropdown && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md p-2 w-32 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-sm hover:bg-gray-100 px-2 py-1"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
