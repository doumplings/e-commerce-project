import { Header } from "antd/es/layout/layout";
import { CartButton } from "../button/cartButton";
import { ProfileButton } from "../button/profileButton";
import { ShopButton } from "../button/shopButton";
import { HeaderSearch } from "./headerSearch";
import { Link } from "react-router-dom";

export const RootHeader = () => {
  return (
    <Header className="flex flex-row justify-center place-items-center gap-4 bg-indigo-950">
      <h1 className="text-white text-sm">
        <Link to={"/"} className="text-white">
          Products Store
        </Link>
      </h1>
      <HeaderSearch />
      <ShopButton />
      <ProfileButton />
      <CartButton />
    </Header>
  );
};
