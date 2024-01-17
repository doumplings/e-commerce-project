import { Alert } from "antd";
import { AnimatePresence, motion } from "framer-motion";

interface SuccessAlertProps {
  successVisible: boolean;
}

export const SuccessAlert = ({ successVisible }: SuccessAlertProps) => {
  return (
    <AnimatePresence>
      {successVisible ? (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
          className="absolute z-20 left-1/2"
        >
          <Alert
            className="text-center rounded-xl -translate-x-1/2 "
            banner
            type="success"
            message="Added to Cart"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
