import Image from "next/image";

import bg from "@/assets/images/auth-bg.jpg";

const AuthLayout = ({ children }) => {
  return (
    <section className="relative min-h-screen py-16">
      <Image
        src={bg}
        alt=""
        height={800}
        width={1200}
        className="min-h-screen h-full w-full absolute top-0 left-0 object-cover -z-1"
      />
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default AuthLayout;
