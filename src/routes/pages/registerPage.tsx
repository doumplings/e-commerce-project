import { RegisterForm } from "../../components/register/registerForm";
import { motion } from "framer-motion";

export const RegisterPage = () => {
  return (
    <div className="relative grid grid-cols-2 w-1/2 h-1/2 left-1/4 top-24 bg-white rounded">
      <motion.div
        initial={{ x: "100%", z: 10 }}
        animate={{ x: 0 }}
        className="bg-blue-100 grid place-items-center rounded"
      >
        IMG
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.2 } }}
      >
        <RegisterForm />
      </motion.div>
    </div>
  );
};
