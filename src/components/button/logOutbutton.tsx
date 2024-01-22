import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.context";
import { defaultUser } from "../../api/user.service";
import { ExclamationCircleFilled, LogoutOutlined } from "@ant-design/icons";

export const LogOutButton = () => {
  const { confirm } = Modal;
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure you want to logout?",
      icon: <ExclamationCircleFilled />,
      content: "You will be logged out",
      okText: "Confirm",
      okType: "danger",
      cancelText: "Cancel",
      centered: true,
      onOk() {
        console.log("OK");
        setUser(defaultUser);
        localStorage.clear();
        navigate("/");
      },
      onCancel() {
        console.log("canceled");
      },
    });
  };

  return (
    <Button
      danger
      className="absolute top-8 right-8"
      onClick={() => {
        showDeleteConfirm();
      }}
    >
      <LogoutOutlined />
    </Button>
  );
};
