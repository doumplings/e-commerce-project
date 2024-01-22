import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

export const ProductPageImages = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <div className="h-2/3">
        <AnimatePresence>
          <motion.div
            key={selectedIndex}
            className="w-full h-full grid place-items-center bg-blue-200 rounded"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
              opacity: 1,
              y: "0",
              transition: { duration: 0.5, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
          >
            IMG{selectedIndex}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="h-1/3 grid grid-cols-4 gap-2 p-4">
        <div
          onClick={() => setSelectedIndex(1)}
          className="bg-blue-100 rounded grid place-items-center"
        >
          IMG1
        </div>
        <div
          onClick={() => setSelectedIndex(2)}
          className="bg-blue-100 rounded grid place-items-center"
        >
          IMG2
        </div>
        <div
          onClick={() => setSelectedIndex(3)}
          className="bg-blue-100 rounded grid place-items-center"
        >
          IMG3
        </div>
        <div
          onClick={() => setSelectedIndex(4)}
          className="bg-blue-100 rounded grid place-items-center"
        >
          IMG4
        </div>
      </div>
    </>
  );
};
