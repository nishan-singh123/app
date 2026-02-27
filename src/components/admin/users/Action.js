import { updateUserRoles } from "@/api/user";
import Modal from "@/components/Modal";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "@/constants/roles";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Action = ({ id, roles }) => {
  const [show, setShow] = useState(false);
  const [userRoles, setUserRoles] = useState(roles);

  function setRoles(role) {
    setUserRoles((prev) =>
      prev.includes(role)
        ? prev.filter((item) => item != role)
        : [...prev, role],
    );
  }

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="p-2 rounded-lg hover:bg-primary/20 text-primary cursor-pointer"
      >
        <FaPencilAlt />
      </button>
      <Modal
        show={show}
        setShow={setShow}
        title={"Update user roles"}
        onConfirm={() => {
          updateUserRoles(id, userRoles.length == 0 ? [ROLE_USER] : userRoles)
            .then(() => {
              toast.success("Roles updated successfully.");

              setShow(false);
            })
            .catch((error) => {
              console.log(error);

              toast.error("Roles update failed.");
            });
        }}
      >
        <div className="flex items-center gap-3 pt-3 pb-8">
          {[ROLE_USER, ROLE_MERCHANT, ROLE_ADMIN].map((role) => (
            <label
              key={role}
              className="px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2 justify-center hover:bg-primary/10 cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked={userRoles.includes(role)}
                disabled={role == ROLE_ADMIN}
                onChange={() => setRoles(role)}
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Action;
