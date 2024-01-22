import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export const LandingPage = () => {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <motion.div
        className="grid place-items-center"
        initial={{ opacity: 0 }}
        animate={{
          x: [100, 500, 100],
          opacity: 1,
          transition: { duration: 20, repeat: Infinity },
        }}
      >
        <img
          className="w-[300%] h-[300%]"
          src="src/assets/gradient-bkg.png"
          alt=""
        />
      </motion.div>
      <Link
        className="absolute left-1/2 top-1/2 -translate-x-1/2"
        to={"products"}
      >
        <Button size="large" ghost>
          Start Shopping
          <ArrowRightOutlined />
        </Button>
      </Link>
    </div>
  );
};
