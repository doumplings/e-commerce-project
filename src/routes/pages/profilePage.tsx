import { useUserContext } from "../../context/user.context";
import { Divider } from "antd";
import { LogOutButton } from "../../components/button/logOutbutton";

export const ProfilePage = () => {
  const { user } = useUserContext();
  return (
    <div className="relative my-8 mx-12 p-4 rounded-xl bg-white h-full">
      <h1>Welcome {user.name}!</h1>
      <p>{user.email}</p>
      <LogOutButton />
      <Divider />
      <h2>Order history</h2>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
      <p>BLAH BLAH</p>
    </div>
  );
};
