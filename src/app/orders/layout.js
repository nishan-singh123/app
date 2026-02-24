"use client";

import Spinner from "@/components/Spinner";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const OrderLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (user) return <>{children}</>;

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );
};

export default OrderLayout;
