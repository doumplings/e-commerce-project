import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../api/product.service";
import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from "../api/myCart.service";

export type MyCartType = {
  item: ProductType;
  count: number;
};

type MyCartContextType = {
  myCart: MyCartType[];
  setMyCart: Dispatch<SetStateAction<MyCartType[]>>;
};

interface MyCartProviderProps {
  children: ReactNode;
}

export const MyCartContext = createContext<MyCartContextType | undefined>(
  undefined
);

export const MyCartProvider = ({ children }: MyCartProviderProps) => {
  const [myCart, setMyCart] = useState<MyCartType[]>([]);

  return (
    <MyCartContext.Provider value={{ myCart: myCart, setMyCart: setMyCart }}>
      {children}
    </MyCartContext.Provider>
  );
};

export const useMyCartContext = () => {
  const myCartContext = useContext(MyCartContext);

  if (myCartContext === undefined) {
    throw new Error("MyCart context is undefined");
  }
  const { myCart, setMyCart } = myCartContext;

  useEffect(() => {
    if (myCart === undefined) {
      const savedProducts = getProductsFromLocalStorage();
      if (savedProducts === null) {
        null;
      } else {
        setMyCart(savedProducts);
      }
    } else {
      setProductsToLocalStorage(myCart);
    }
  }, [myCart]);

  return { myCart, setMyCart };
};
