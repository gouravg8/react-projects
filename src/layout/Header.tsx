import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [displayDropdown, setDisplayDropdown] = useState("hidden");
  const [dropdowned, setDropdowned] = useState(true);
  // console.log(displayDropdown, dropdowned);
  const handleDropdown = () => {
    dropdowned
      ? setDisplayDropdown("block text-black")
      : setDisplayDropdown("hidden ");
    setDropdowned((prev) => !prev);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className=" bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center z-0">
            <img
              src="https://yt3.ggpht.com/F8kNqrtltLAfCGes32Dh06YdTsJXM5E6pdwHKluBOH3x0aXoFlDcK_7R1esQOsl2GEd1Cc7deQ=s176-c-k-c0x00ffffff-no-rj"
              className="mr-3 h-12 rounded-lg"
              alt="Logo"
            />
          </Link>
          <ul className="w-fit float-end text-right ">
            <li className="md:hidden">
              <button
                type="button"
                className="inline-flex  w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700 z-10"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleDropdown}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>
            <li
              className={`absolute ${displayDropdown} md:block w-fit z-10 rounded-md origin-top-right right-0 md:top-1 lg:top-2 shadow-lg md:shadow-none ring-1 md:ring-0 ring-black ring-opacity-5 focus:outline-none `}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="">
                <ul className="flex flex-col font-medium md:flex-row lg:space-x-8 lg:mt-0 bg-white md:bg-transparent mt-1 rounded">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive
                            ? "text-orange-500"
                            : "text-black md:text-gray-300"
                        } lg:hover:bg-transparent hover:text-orange-600 lg:p-0`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/todo"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive
                            ? "text-orange-500"
                            : "text-black md:text-gray-300"
                        } lg:hover:bg-transparent hover:text-orange-600 lg:p-0`
                      }
                    >
                      Todo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/calculator"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive
                            ? "text-orange-500"
                            : "text-black md:text-gray-300"
                        } lg:hover:bg-transparent hover:text-orange-600 lg:p-0`
                      }
                    >
                      Calculator
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
