import { Link, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import { ProductsPage } from "./pages/productsPages";
import { Button } from "antd";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { ProductPage } from "./pages/productPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Button className="absolute top-1/2 left-1/4 w-1/2">
            <Link to={"products"}>All Products</Link>
          </Button>
        ),
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "profile",
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      { path: "register", element: <RegisterPage /> },
      {
        path: "cart",
        element: <div>my Cart</div>,
      },
    ],
  },
]);
