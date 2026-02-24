"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import Spinner from "@/components/Spinner";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaShippingFast,
  FaShoppingBasket,
  FaTimesCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const statuses = [
  {
    label: "Pending",
    value: ORDER_STATUS_PENDING,
    Icon: <FaClock className="text-amber-600" />,
  },
  {
    label: "Confirmed",
    value: ORDER_STATUS_CONFIRMED,
    Icon: <FaShoppingBasket className="text-primary" />,
  },
  {
    label: "Shipped",
    value: ORDER_STATUS_SHIPPED,
    Icon: <FaShippingFast className="text-violet-600" />,
  },
  {
    label: "Delivered",
    value: ORDER_STATUS_DELIVERED,
    Icon: <FaCheckCircle className="text-green-600" />,
  },
  {
    label: "Cancelled",
    value: ORDER_STATUS_CANCELLED,
    Icon: <FaTimesCircle className="text-red-600" />,
  },
];

const OrderPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const searchParams = useSearchParams();

  const queryStatus = searchParams.get("status");

  useEffect(() => {
    getOrdersByUser(queryStatus)
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryStatus]);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-16 w-16 fill-primary" />
      </div>
    );

  return (
    <section className="py-16 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Yours Orders
        </h2>

        <div className="border-b border-gray-200 mb-5">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-body">
            {statuses.map((status, index) => (
              <li key={index} className="me-2">
                <Link
                  href={`?status=${status.value}`}
                  className={`${status.value == queryStatus ? "border-primary" : "border-transparent"} inline-flex gap-1 items-center justify-center p-4 border-b border-primary rounded-t-base hover:text-fg-brand hover:border-brand group hover:border-gray-500`}
                >
                  {status.Icon}
                  {status.label}
                </Link>
              </li>
            ))}

            {/* <li className="me-2">
              <Link
                href={`?status=${ORDER_STATUS_CONFIRMED}`}
                className="inline-flex gap-1 items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group"
              >
                <FaCircleDollarToSlot className="text-primary" />
                Confirmed
              </Link>
            </li>
            <li className="me-2">
              <Link
                href={`?status=${ORDER_STATUS_SHIPPED}`}
                className="inline-flex gap-1 items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group"
              >
                <FaShippingFast className="text-purple-600" />
                Shipped
              </Link>
            </li>
            <li className="me-2">
              <Link
                href={`?status=${ORDER_STATUS_DELIVERED}`}
                className="inline-flex gap-1 items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group"
              >
                <FaCheckCircle className="text-green-600" />
                Delivered
              </Link>
            </li>
            <li className="me-2">
              <Link
                href={`?status=${ORDER_STATUS_CANCELLED}`}
                className="inline-flex gap-1 items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group"
              >
                <FaTimesCircle className="text-red-600" />
                Cancelled
              </Link>
            </li> */}
          </ul>
        </div>

        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrderPage;
