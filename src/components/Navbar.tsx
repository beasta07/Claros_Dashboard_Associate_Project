import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import {  NavLink, useNavigate, useParams } from "react-router-dom";

type NavbarProps = {
  displaySidebar: boolean;
  setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>;
};


const Navbar = ({ displaySidebar, setDisplaySidebar }:NavbarProps) => {
  const [displayDropdown,setDisplayDropDown]=useState(false)
  const navigate = useNavigate();
  const params = useParams();
  const pageTitle = params.title || "Dashboard";
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="bg-[#F7F7FB] w-full lg:px-10 lg:py-8 p-4 font-jakarta">
      <div className="lg:flex gap-4 w-full ">
        <div className="flex justify-between  gap-4 w-full">
          <div
            onClick={() => {
              setDisplaySidebar(!displaySidebar);
            }}
            className="border  lg:hidden flex items-center bg-white border-gray-300 rounded-full py-2 px-4"
          >
            <GiHamburgerMenu />
          </div>
          <div className="w-full">

          <NavLink to='/'>
          <h1 className="w-full p-4 font-semibold block bg-white  rounded-full">{pageTitle}</h1>
          </NavLink>
          </div>
        </div>
        <div className="bg-white rounded-full p-2  shadow-xs  mt-4 lg:mt-0  flex  gap-3 items-center">
       
          <div className=" bg-[#D9D9D9] rounded-full   px-2 py-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5798 19.01L2.5598 19.03C2.2898 18.44 2.1198 17.77 2.0498 17.03C2.1198 17.76 2.3098 18.42 2.5798 19.01Z"
                fill="#292D32"
              />
              <path
                d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
                fill="#292D32"
              />
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
                fill="#292D32"
              />
            </svg>
          </div>
          <div className="relative">
            <div
              onClick={() => setDisplayDropDown(!displayDropdown)}
              className="flex items-center w-full gap-2 cursor-pointer"
            >
              <h2 className="text-nowrap text-sm">Pranish bista</h2>
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
