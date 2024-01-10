import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const CartButton = () => {
  return (
    <Button ghost className="border-none">
      <Link to={"/cart"}>
        <ShoppingCartOutlined />
      </Link>
    </Button>
  );
};
