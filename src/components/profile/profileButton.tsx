import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.context";

export const ProfileButton = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUserContext();

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <Button ghost className="border-none" onClick={handleClick}>
      <UserOutlined />
    </Button>
  );
};
