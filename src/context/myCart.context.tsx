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
    const savedCart = getProductsFromLocalStorage();
    if (myCart.length === 0 && savedCart !== null) {
      setMyCart(savedCart);
      console.log("setting saved cart");
    } else {
      console.log(" setting to local storage");
      setProductsToLocalStorage(myCart);
    }

    if (myCart.length === 1) {
    }
  }, [myCart.length]);

  return { myCart, setMyCart };
};
