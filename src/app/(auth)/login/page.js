"use client";

import { login } from "@/api/auth";
import PasswordInput from "@/components/form/PasswordInput";
import Logo from "@/components/Logo";
import Spinner from "@/components/Spinner";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { loginUser } from "@/redux/auth/authActions";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div className="flex mt-36 items-center justify-center w-full px-4">
      <div className="flex w-full flex-col max-w-96 gap-5">
        <Logo />
        <form onSubmit={handleSubmit(submitForm)}>
          <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>
          <p className="mt-4 text-base text-gray-500/90">
            Please enter email and password to access.
          </p>
          <div className="mt-10">
            <label className="font-medium">Email</label>
            <input
              placeholder="Please enter your email"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="email"
              {...register("email")}
            />
          </div>
          <div className="mt-6">
            <label className="font-medium">Password</label>
            <PasswordInput {...register("password")} />
          </div>
          <Link className="p-2 inline-block text-sm text-primary hover:underline" href={FORGOT_PASSWORD_ROUTE}>Forgot password</Link>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-3 mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700 disabled:opacity-80"
          >
            Login
            {loading && <Spinner className="h-6 w-6 fill-primary" />}
          </button>
          <p className="text-center py-8">
            Don&apos;t have an account?
            <Link
              href={REGISTER_ROUTE}
              className="text-primary hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
