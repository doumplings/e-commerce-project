import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const CartButton = () => {
  const navigate = useNavigate();
  return (
    <Button ghost className="border-none" onClick={() => navigate("/cart")}>
      <ShoppingCartOutlined />
    </Button>
  );
};
