import { motion } from "framer-motion";

const VideoLoader = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <video
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default VideoLoader;
