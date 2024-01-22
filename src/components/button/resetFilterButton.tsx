import { Button } from "antd";
import {
  getAllProducts,
  getSortedProductsByStock,
} from "../../api/product.service";
import { useProductsContext } from "../../context/products.context";

export const ResetFilterButton = () => {
  const { setProducts } = useProductsContext();

  const handleClick = () => {
    getAllProducts().then((res) => setProducts(getSortedProductsByStock(res)));
  };
  return <Button onClick={handleClick}>Reset</Button>;
};
