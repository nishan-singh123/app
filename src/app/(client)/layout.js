"use client";

import Spinner from "@/components/Spinner";
import Sidebar from "@/components/admin/Sidebar";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ClientLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

if (user)
    return (
      <div>
        <Sidebar />
        <div className="p-6 sm:ml-64">{children}</div>
      </div>
    );

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-20 w-20 fill-primary" />
    </div>
  );
};

export default ClientLayout;
