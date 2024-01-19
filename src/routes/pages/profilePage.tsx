import { LogoutOutlined } from "@ant-design/icons";
import { useUserContext } from "../../context/user.context";
import { Button, Divider } from "antd";
import { defaultUser } from "../../api/user.service";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  return (
    <div className="relative my-8 mx-12 p-4 rounded-xl bg-white h-full">
      <h1>Welcome {user.name}!</h1>
      <p>{user.email}</p>
      <Button
        danger
        className="absolute top-8 right-8"
        onClick={() => {
          setUser(defaultUser);
          navigate("/");
        }}
      >
        <LogoutOutlined />
      </Button>
      <Divider />
      <h2>Order history</h2>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
    </div>
  );
};
