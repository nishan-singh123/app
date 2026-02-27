import { format } from "date-fns";
import Link from "next/link";
import { FaCog } from "react-icons/fa";
import OrderStatus from "./Status";
import OrderAction from "./Action";
import Spinner from "@/components/Spinner";

const OrdersTable = ({ loading, orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Order Id
            </th>
            <th scope="col" className="px-4 py-3">
              Product Details
            </th>
            <th scope="col" className="px-4 py-3">
              Total Price
            </th>
            <th scope="col" className="px-4 py-3">
              Customer Details
            </th>
            <th scope="col" className="px-4 py-3">
              Shipping Address
            </th>
            <th scope="col" className="px-4 py-3">
              Order Date
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              <FaCog />
            </th>
          </tr>
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan={8}>
                <div className="flex items-center justify-center py-10">
                  <Spinner className="h-12 w-12 fill-primary" />
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {orders.map(
              (order) =>
                order.orderItems.some((item) => item.product) && (
                  <tr
                    key={order._id}
                    className="border-b border-gray-300 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 dark:text-white"
                    >
                      #{order.orderNumber}
                    </th>
                    <td className="px-4 py-3">
                      {order.orderItems.map((item, index) => (
                        <p key={index}>
                          <Link
                            href={`/products/${item.product._id}`}
                            className="text-primary mr-2 hover:underline"
                          >
                            {item.product?.name}
                          </Link>
                          (x {item.quantity})
                        </p>
                      ))}
                    </td>
                    <td className="px-4 py-3">Rs. {order.totalPrice}</td>
                    <td className="px-4 py-3">
                      <p>
                        Name:
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.name}
                        </span>
                      </p>
                      <p>
                        Email:
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.email}
                        </span>
                      </p>
                      <p>
                        Phone:
                        <span className="text-gray-900 dark:text-gray-100">
                          {order.user.phone}
                        </span>
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      {order.shippingAddress.city},
                      {order.shippingAddress.province}
                    </td>
                    <td className="px-4 py-3">
                      {format(order.createdAt, "dd MMM, yyyy")}
                    </td>
                    <td className="px-4 py-3">
                      <OrderStatus status={order.status} />
                    </td>
                    <td className="px-4 py-3">
                      <OrderAction id={order._id} status={order.status} />
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OrdersTable;
