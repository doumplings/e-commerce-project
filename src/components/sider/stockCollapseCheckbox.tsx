import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/products.context";
import {
  getAllProducts,
  getSortedProductsByStock,
} from "../../api/product.service";

export const StockCollapseCheckbox = () => {
  const [inStockCheck, setInStockCheck] = useState(false);
  const { setProducts } = useProductsContext();

  useEffect(() => {
    if (inStockCheck) {
      setProducts((prev) => prev.filter((product) => product.inStock === true));
    } else {
      getAllProducts().then((res) =>
        setProducts(getSortedProductsByStock(res))
      );
    }
  }, [inStockCheck]);

  return (
    <Checkbox
      checked={inStockCheck}
      onChange={() => setInStockCheck(!inStockCheck)}
    >
      In Stock
    </Checkbox>
  );
};
