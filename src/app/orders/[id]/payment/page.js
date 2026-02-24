"use client";

import { confirmPayment } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { ORDER_STATUS_CONFIRMED } from "@/constants/order";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const OrderPayment = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    const status = searchParams?.get("status");

    confirmPayment(params.id, status)
      .then(() => {
        toast.success("Order payment success.");
        router.replace(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Order payment failed.");
        router.replace(ORDERS_ROUTE);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );

  return <></>;
};

export default OrderPayment;
