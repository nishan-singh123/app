import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        placeholder="Please enter your password"
        className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
        required
        type={show ? "text" : "password"}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-1 top-4 p-2 cursor-pointer"
      >
        {show ? <FaEye /> : <FaEyeSlash/>}
      </button>
    </div>
  );
};

export default PasswordInput;
