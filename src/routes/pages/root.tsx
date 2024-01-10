import { Layout } from "antd";
import { RootHeader } from "../../components/header/rootHeader";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const Root = () => {
  return (
    <Layout className="absolute left-0 top-0 w-full h-screen">
      <RootHeader />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </Layout>
  );
};
