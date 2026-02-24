import {
  FaChartPie,
  FaShoppingBag,
  FaShoppingCart,
  FaUserCog,
  FaUsersCog,
} from "react-icons/fa";

import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  PROFILE_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "./routes";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "./roles";

const sidebarLinks = [
  {
    Icon: FaChartPie,
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER],
  },
  {
    Icon: FaShoppingBag,
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT],
  },
  {
    Icon: FaShoppingCart,
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT],
  },
  {
    Icon: FaUsersCog,
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN],
  },
  {
    Icon: FaUserCog,
    label: "Profile",
    route: PROFILE_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER],
  },
];

export default sidebarLinks;
