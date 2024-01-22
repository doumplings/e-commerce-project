import { useEffect } from "react";
import {
  getAllProducts,
  getSortedProductsByStock,
} from "../../api/product.service";
import { ProductCard } from "./productCard";
import { useProductsContext } from "../../context/products.context";

export const ProductGrid = () => {
  const { products, setProducts } = useProductsContext();

  useEffect(() => {
    getAllProducts().then((data) => {
      const sortedProducts = getSortedProductsByStock(data);
      setProducts(sortedProducts);
    });
  }, []);

  return (
    <div className="w-full grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4 px-4">
      {products.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
          Product not found!
        </div>
      ) : (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      )}
    </div>
  );
};
