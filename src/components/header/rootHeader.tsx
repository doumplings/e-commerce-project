import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import { CartButton } from "../button/cartButton";
import { ProfileButton } from "../button/profileButton";
import { ShopButton } from "../button/shopButton";

export const RootHeader = () => {
  return (
    <Header className="flex flex-row justify-center place-items-center gap-4 bg-indigo-950">
      <h1 className="text-white text-sm">Products Store</h1>
      <Search placeholder="Search for products" className="h-[32px]" />
      <ShopButton />
      <ProfileButton />
      <CartButton />
    </Header>
  );
};
