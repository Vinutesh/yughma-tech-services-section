import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import softwareDevelopment from "@/assets/software-development.png";
import elearning from "@/assets/elearning.png";
import packagedesigning from "@/assets/packagedesigning.png";
import uiuxdesign from "@/assets/uiuxdesign.png";
import automation from "@/assets/automation.png";
import digitalmarketing from "@/assets/digitalmarketing.png";
import socialmedia from "@/assets/socialmedia.png";
import webapp from "@/assets/webapp.png";

const sections = [
  {
    image: softwareDevelopment,
    title: "Software Development",
    subtitle: "Custom Solutions",
    description:
      "Building scalable, robust applications that power your business growth. From enterprise systems to consumer products.",
  },
  {
    image: elearning,
    title: "eLearning Solutions",
    subtitle: "Knowledge Amplified",
    description:
      "Immersive learning platforms that transform how organizations train and educate. Engagement meets efficacy.",
  },
  {
    image: uiuxdesign,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Creating intuitive, visually appealing interfaces focused on usability, accessibility, and seamless user experiences."
  },
  {
    image: digitalmarketing,
    title: "Digital Marketing",
    subtitle: "Growth Strategy",
    description:
      "Driving brand visibility and customer engagement through data-driven digital marketing strategies across multiple platforms.",
  },
  {
    image: automation,
    title: "Automation",
    subtitle: "Smart Workflows",
    description:
      "Streamlining operations with intelligent automation solutions that improve efficiency, reduce errors, and save time.",
  },
  {
    image: packagedesigning,
    title: "Packaging Design",
    subtitle: "Brand Identity",
    description:
      "Designing impactful and visually compelling packaging that enhances product appeal and strengthens brand recognition.",
  },
  {
    image: socialmedia,
    title: "Social Media Marketing",
    subtitle: "Online Presence",
    description:
      "Building strong social media engagement through creative content, consistent branding, and targeted campaigns.",
  },
  {
    image: webapp,
    title: "Website & App Development",
    subtitle: "Digital Experiences",
    description:
      "Developing responsive websites and powerful mobile applications that deliver performance, reliability, and great user experience.",
  },
];

const PinnedImageSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
   <section className="relative">
      {/* Mobile-friendly stacked layout */}
      <div className="lg:hidden py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-10">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3 block">
                  {section.subtitle}
                </span>
                <h2 className="heading-display text-2xl sm:text-3xl mb-4">
                  {section.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop sticky layout */}
      <div
        ref={containerRef}
        className="hidden lg:block"
        style={{ height: `${sections.length * 100}vh` }}
      >
        {/* Sticky container for the image */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
            
            {/* Images with crossfade */}
            <div className="relative w-full h-full max-w-6xl mx-auto px-6">
              {sections.map((section, index) => {
                const start = index / sections.length;
                const end = (index + 1) / sections.length;
                
                return (
                  <ImageSlide
                    key={index}
                    section={section}
                    index={index}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                    total={sections.length}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImageSlideProps {
  section: (typeof sections)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  total: number;
}

const ImageSlide = ({ section, index, scrollYProgress, start, end, total }: ImageSlideProps) => {
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05),
      start + 0.02,
      end - 0.05,
      Math.min(1, end + 0.02),
    ],
    index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.9, 1, 1, 1.05]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["5%", "-5%"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.08],
    [60, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="order-2 lg:order-1"
        >
          <motion.span className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4 block">
            {section.subtitle}
          </motion.span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
            {section.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {section.description}
          </p>
          <motion.button
            className="mt-8 btn-outline-premium text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ scale, y }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glow-effect">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PinnedImageSection;
