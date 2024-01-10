import { useEffect, useState } from "react";
import { ProductType, getAllProducts } from "../../api/product.service";
import { ProductCard } from "./productCard";

export const ProductGrid = () => {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  });

  return (
    <div className="w-full grid grid-cols-4 gap-4 px-4">
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
