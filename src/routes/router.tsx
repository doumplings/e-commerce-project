import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import { ProductsPage } from "./pages/productsPages";
import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { ProductPage } from "./pages/productPage";
import { MyCartPage } from "./pages/myCartPage";
import { ProfilePage } from "./pages/profilePage";
import { LandingPage } from "./pages/landingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
        element: <ProfilePage />,
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
