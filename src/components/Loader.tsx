import { motion } from "framer-motion";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-28 h-28 drop-shadow-[0_0_25px_rgba(99,102,241,0.8)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: 2,
          ease: "easeInOut",
        }}
        onAnimationComplete={onFinish}
      />
    </motion.div>
  );
};

export default Loader;
