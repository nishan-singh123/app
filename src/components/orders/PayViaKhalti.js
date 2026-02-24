"use client";

import { payViaKhalti } from "@/api/orders";
import { useState } from "react";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

const PayViaKhalti = ({ id }) => {
  const [loading, setLoading] = useState(false);

  function initOrderPayment() {
    setLoading(true);

    payViaKhalti(id)
      .then((data) => {
        window.location.href = data.payment_url;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Order payment failed.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={initOrderPayment}
      className="flex items-center gap-2 bg-purple-900 hover:bg-violet-900 text-white rounded-md px-4 py-2 cursor-pointer"
    >
      {loading && <Spinner className="w-5 h-5 fill-purple-900" />}
      Pay Via Khalti
    </button>
  );
};

export default PayViaKhalti;
