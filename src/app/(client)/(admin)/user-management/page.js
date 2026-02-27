"use client";

import { getAllUsers } from "@/api/user";
import Table from "@/components/admin/users/Table";
import { useEffect, useState } from "react";

const UserManagementPage = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">User Management</h1>
      <section>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <Table loading={loading} users={users} />
        </div>
      </section>
    </>
  );
};

export default UserManagementPage;
