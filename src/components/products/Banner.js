import { FaGift } from "react-icons/fa";
import Image from "next/image";

import banner from "@/assets/images/product-banner.jpg";

const ProductsBanner = () => {
  return (
    <section className="pb-8">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden text-white px-10  bg-linear-to-r from-primary/80 to-secondary/80 w-full h-52 rounded-2xl shadow-sm">
          <Image
            src={banner}
            alt="banner"
            height={600}
            width={900}
            className="w-full absolute bottom-0 left-0 -z-1"
          />
          <div className="flex items-center justify-between h-full mx-auto max-w-6xl">
            <div className="flex flex-col justify-center items-start">
              <span>Black friday sale</span>
              <h2 className="text-5xl font-semibold mb-3">
                20% off every Product
              </h2>
              <button className="bg-white rounded-lg px-5 py-1 text-black">
                Buy Now
              </button>
            </div>
            <div className="px-10">
              <FaGift className="text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
