"use client";

import { getOrdersByUser } from "@/api/orders";
import OrderCard from "@/components/orders/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUser()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response.data);
      });
  }, []);

  return (
    <section class="py-16 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Yours Orders
        </h2>

        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrderPage;

    
   

                                            
