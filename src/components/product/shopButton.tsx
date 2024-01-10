import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const ShopButton = () => {
  return (
    <Button ghost className="border-none">
      <Link to={"products"}>
        <ShopOutlined />
      </Link>
    </Button>
  );
};
