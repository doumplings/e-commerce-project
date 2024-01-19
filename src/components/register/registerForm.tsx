import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import {
  UserType,
  getNewUserId,
  getUser,
  setUsertoLocalStorage,
} from "../../api/user.service";
import { useUserContext } from "../../context/user.context";

type Inputs = {
  username: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

const schema = z.object({
  username: z
    .string()
    .min(1, { message: "Required" })
    .max(16, { message: "Maximum of 16 characters" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(1, { message: "Required" })
    .min(8, { message: "Password must have at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

export const RegisterForm = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successVisible, setSuccessVisibility] = useState(false);
  const { handleSubmit, control, setError } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    getUser(data.username).then((res) => {
      if (res !== undefined) {
        setError("username", { message: "This username is already taken" });
      }
    });
    getUser(data.email).then((res) => {
      if (res !== undefined) {
        setError("email", { message: "This email is already being used" });
      }
    });
    getNewUserId().then((newId) => {
      const newUser: UserType = {
        id: newId,
        email: data.email,
        name: data.username,
        password: data.password,
      };
      setUser(newUser);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      setTimeout(() => {
        setSuccessVisibility(true);
      }, 500);
      setTimeout(() => {
        navigate("/products");
      }, 1000);
      if (data.rememberMe) {
        setUsertoLocalStorage(newUser);
      }
    });
  };

  return (
    <Form
      className="h-full flex flex-col justify-center px-4 "
      onFinish={handleSubmit(onSubmit)}
    >
      {successVisible ? (
        <Alert
          message="Logged In"
          banner
          type="success"
          className="absolute top-4 rounded-xl left-1/2 -translate-x-1/2 z-10"
        />
      ) : null}
      <FormItem control={control} name="username">
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </FormItem>
      <FormItem control={control} name="email">
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </FormItem>
      <FormItem control={control} name="password">
        <Input.Password
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisibility,
          }}
          prefix={<LockOutlined />}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </FormItem>
      <div>
        <FormItem className="mb-0" control={control} name="rememberMe">
          <Checkbox>Remember me</Checkbox>
        </FormItem>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>

        <div>
          Or <Link to={"/login"}>log in now!</Link>
        </div>
      </div>
    </Form>
  );
};
