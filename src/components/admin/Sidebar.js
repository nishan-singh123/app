"use client";
import sidebarLinks from "@/constants/sidebar";
import Logo from "../Logo";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="pt-14 fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto shadow dark:bg-gray-950">
        <div className="px-2.5 py-3">
          <Logo />
        </div>
        <ul className="space-y-2 font-medium">
          {sidebarLinks.map((item) => {
            const isActive = pathname.startsWith(item.route);

            return (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className={`${isActive ? "bg-primary/10 text-primary" : ""} flex items-center px-2 py-1.5 text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group`}
                >
                  <item.Icon />
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button className="gap-3 flex items-center justify-center px-2 py-1.5 w-full rounded-md bg-red-600 hover:bg-red-700 text-white">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
