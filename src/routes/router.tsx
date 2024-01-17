import { Link, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import { ProductsPage } from "./pages/productsPages";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { ProductPage } from "./pages/productPage";
import { MyCartPage } from "./pages/myCartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Link className="absolute left-1/2 top-1/2" to={"products"}>
            All Products
          </Link>
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
        element: <MyCartPage />,
      },
    ],
  },
]);
