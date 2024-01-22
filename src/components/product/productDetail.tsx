import { ProductType } from "../../api/product.service";
import { InStockTag } from "./inStockTag";
import { OutOfStockTag } from "./outOfStockTag";

interface ProductDetailProps {
  product: ProductType | undefined;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div>
      <h3>
        {product?.name}
        <div className="w-24 float-right -translate-y-1">
          {product?.inStock ? <InStockTag /> : <OutOfStockTag />}
        </div>{" "}
      </h3>
      <p>{product?.description}</p>
      <p className="text-xl">{product?.price}</p>
    </div>
  );
};
