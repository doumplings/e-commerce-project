import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { MyCartProvider } from "./context/myCart.context";
import { UserContextProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsProvider>
        <MyCartProvider>
          <RouterProvider router={router} />
        </MyCartProvider>
      </ProductsProvider>
    </UserContextProvider>
  </React.StrictMode>
);
