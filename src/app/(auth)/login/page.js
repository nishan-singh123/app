"use client";

import { login } from "@/api/auth";
import Logo from "@/components/Logo";
import { REGISTER_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  async function submitForm(data){
    try {
      const result = await login(data);

      localStorage.setItem("authToken", result.token)

      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  }

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
            <input
              placeholder="Please enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type="password"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="mt-8 py-3 w-full cursor-pointer rounded-md bg-primary text-white transition hover:bg-blue-700"
          >
            Login
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
