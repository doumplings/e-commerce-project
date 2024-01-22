import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const BackToProductsButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="absolute top-0 left-0"
      type="link"
      onClick={() => navigate("/products")}
    >
      <LeftOutlined /> Back to products
    </Button>
  );
};
