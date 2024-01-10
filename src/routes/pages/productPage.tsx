import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductType, getProduct } from "../../api/product.service";

export const ProductPage = () => {
  const location = useLocation();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    getProduct(location.state).then((res) => setProduct(res));
  });

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>{product?.price}</p>
    </div>
  );
};
