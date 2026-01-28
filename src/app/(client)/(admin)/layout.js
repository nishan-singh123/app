"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({children}) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if(user) return <div>{children}</div>;

  return;
};

export default AdminLayout;
