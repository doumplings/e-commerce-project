import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ProductType } from "../api/product.service";

type ProductsContextType = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  return (
    <ProductsContext.Provider
      value={{ products: products, setProducts: setProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const productsContext = useContext(ProductsContext);

  if (productsContext === undefined) {
    throw new Error("Products context is undefined");
  }
  const { products, setProducts } = productsContext;

  return { products, setProducts };
};
