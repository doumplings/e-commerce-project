import { Button } from "antd";
import { ProductType } from "../../api/product.service";
import { useNavigate } from "react-router-dom";
import { InStockTag } from "./inStockTag";
import { OutOfStockTag } from "./outOfStockTag";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-full ">
      <div className="w-full h-24 bg-blue-100 grid place-items-center">IMG</div>
      {product.inStock ? <InStockTag /> : <OutOfStockTag />}
      <h3 className="mt-2 m-0 p-0">{product.name}</h3>
      <p className="p-0 text-center m-0">{product.price}</p>
      <Button
        className="mt-2"
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: product.id,
          })
        }
      >
        Buy
      </Button>
    </div>
  );
};
