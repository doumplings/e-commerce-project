import { MyCartType } from "../context/myCart.context";

export const setProductsToLocalStorage = (myCart: MyCartType[]) => {
  const myCartString = JSON.stringify(myCart);
  localStorage.setItem("myCart", myCartString);
};

export const getProductsFromLocalStorage = (): MyCartType[] | null => {
  const savedCart = localStorage.getItem("myCart");

  if (savedCart === null) {
    return null;
  } else {
    const parsedCart = JSON.parse(savedCart);
    return parsedCart;
  }
};
