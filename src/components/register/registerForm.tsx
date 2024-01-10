import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { Link } from "react-router-dom";
import * as z from "zod";

type Inputs = {
  username: string;
  email: string;
  password: string;
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
});

export const RegisterForm = () => {
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const { handleSubmit, control } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Form
      className="h-full flex flex-col justify-center px-4"
      onFinish={handleSubmit(onSubmit)}
    >
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
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <div>
          Or <Link to={"/login"}>log in now!</Link>
        </div>
      </div>
    </Form>
  );
};
