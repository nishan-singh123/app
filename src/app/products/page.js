import { getProducts } from "@/api/products";
import ProductCard from "@/components/products/Card";
import ProductsFilter from "@/components/products/Filter";

export const metadata = {
  title: "Products | Techno",
};

const ProductsPage = async ({ searchParams }) => {
  const products = await getProducts(searchParams);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_4fr] gap-8">
      <ProductsFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            brand={product.brand}
            category={product.category}
            price={product.price}
            imageUrls={product.imageUrls}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
