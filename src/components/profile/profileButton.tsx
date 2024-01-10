import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const ProfileButton = () => {
  return (
    <Button ghost className="border-none">
      <Link to={"/profile"}>
        <UserOutlined />
      </Link>
    </Button>
  );
};
