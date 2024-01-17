import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <Button ghost className="border-none" onClick={() => navigate("/profile")}>
      <UserOutlined />
    </Button>
  );
};
