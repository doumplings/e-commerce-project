import { useEffect, useState } from "react";
import {
  ProductType,
  getAllProducts,
  getSortedProductsByStock,
} from "../../api/product.service";
import { ProductCard } from "./productCard";

export const ProductGrid = () => {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    getAllProducts().then((data) => {
      const sortedProducts = getSortedProductsByStock(data);
      setProducts(sortedProducts);
    });
  }, []);

  return (
    <div className="w-full grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4 px-4">
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
