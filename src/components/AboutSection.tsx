import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* ✅ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/about-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0" />

      {/* ✅ CONTENT */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block"
        >
          About Yugma
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Built for the future
          <br />
          <span className="text-gradient-accent">
            Delivered Today
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl"
        >
          By blending design thinking, emerging technologies, and strategic
          insight, we help businesses move beyond static solutions and into
          adaptive, performance-driven digital systems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl"
        >
          Whether its transforming learning experiences, launching digital
          products, or enabling digital transformation, Yugma partners with
          organizations to turn vision into velocity.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
