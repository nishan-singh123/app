import Spinner from "@/components/Spinner";
import { FaCog, FaEye } from "react-icons/fa";
import Action from "./Action";

const Table = ({ loading, users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              User Name
            </th>
            <th scope="col" className="px-4 py-3">
              Email Address
            </th>
            <th scope="col" className="px-4 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-4 py-3">
              Address
            </th>
            <th scope="col" className="px-4 py-3">
              Roles
            </th>
            <th scope="col" className="px-4 py-3">
              <div className="flex justify-center">
                <FaCog />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6}>
                <div className="flex items-center justify-center py-10">
                  <Spinner className="h-12 w-12 fill-primary" />
                </div>
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id} className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">
                  {user.address?.city}, {user.address?.province}
                </td>
                <td className="px-4 py-3">{user.roles.join(", ")}</td>
                <td className="px-4 py-3 flex items-center justify-center">
                  <Action id={user._id} roles={user.roles} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
