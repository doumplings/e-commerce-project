import { LoginForm } from "../../components/login/loginForm";
import { motion } from "framer-motion";

export const LoginPage = () => {
  return (
    <div className="relative grid grid-cols-2 w-1/2 h-1/2 left-1/4 top-24 bg-white rounded">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.2 } }}
      >
        <LoginForm />
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        className="bg-blue-100 grid place-items-center rounded"
      >
        IMG
      </motion.div>
    </div>
  );
};
