import config from "@/config/config";
import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { FaLaptop } from "react-icons/fa";

const Logo = () => {
  return (
    <h1 className="text-xl font-semibold text-primary">
      <Link href={HOME_ROUTE} className="flex items-center gap-1">
        <FaLaptop /> {config.appName}
      </Link>
    </h1>
  );
};

export default Logo;
