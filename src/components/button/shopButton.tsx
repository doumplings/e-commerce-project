import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ShopButton = () => {
  const navigate = useNavigate();

  return (
    <Button ghost className="border-none" onClick={() => navigate("products")}>
      <ShopOutlined />
    </Button>
  );
};
