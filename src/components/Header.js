import {
  FaBars,
} from "react-icons/fa";

import Navlink from "./Navlink";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import User from "./User";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-950 sticky top-0 shadow z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          < Logo/>
          {/* Navbar */}
          <Navlink />
          <div className="flex items-center gap-2">
          <ThemeToggler />
            <HeaderCart />
            <User />
            <button className="block md:hidden text-gray-700 px-2 py-1 dark:text-gray-300 dark:hover:text-primary">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
