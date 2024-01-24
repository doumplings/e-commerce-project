import Search from "antd/es/input/Search";
import { useProductsContext } from "../../context/products.context";
import {
  getProductByName,
  getSortedProductsByStock,
} from "../../api/product.service";

export const HeaderSearch = () => {
  const { setProducts } = useProductsContext();
  const handleSearch = (value: string) => {
    getProductByName(value).then((res) =>
      setProducts(getSortedProductsByStock(res))
    );
  };

  return (
    <Search
      placeholder="Search for products"
      className="h-[32px]"
      onSearch={(value) => handleSearch(value)}
    />
  );
};
